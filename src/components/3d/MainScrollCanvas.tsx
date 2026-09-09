import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createPhotorealisticSwisaAirliner, AirlinerComponents } from './RealAirplaneModel';
import { DESTINATION_COUNTRIES } from '../../data/siteData';

interface MainScrollCanvasProps {
  selectedCountryId?: string | null;
  onSelectCountry?: (countryId: string) => void;
  reducedMotion?: boolean;
}

export const MainScrollCanvas: React.FC<MainScrollCanvasProps> = ({
  selectedCountryId,
  onSelectCountry,
  reducedMotion = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(selectedCountryId || null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCountryId) {
      setActiveCountry(selectedCountryId);
    }
  }, [selectedCountryId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvasTest = document.createElement('canvas');
      const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF8FAFC, 0.002);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 23);

    // 2. High-Performance Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Realistic Sunlight & High-Altitude Illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff8ee, 2.6);
    sunLight.position.set(25, 30, 20);
    scene.add(sunLight);

    const goldAtmosphereLight = new THREE.DirectionalLight(0xB45309, 1.0);
    goldAtmosphereLight.position.set(-25, -12, -15);
    scene.add(goldAtmosphereLight);

    const softBackdropLight = new THREE.PointLight(0x94a3b8, 2, 70);
    softBackdropLight.position.set(0, -18, 12);
    scene.add(softBackdropLight);

    // 4. Background High Altitude Particles
    const starCount = 250;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3 + 0] = (Math.random() - 0.5) * 140;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 110;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 90 - 25;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xB45309,
      size: 0.15,
      transparent: true,
      opacity: 0.25,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 5. REAL EARTH GLOBE WITH REAL WORLDMAP TEXTURE
    const globeGroup = new THREE.Group();
    globeGroup.position.set(4.2, -0.6, 0);
    scene.add(globeGroup);

    const globeRadius = 6.2;
    const textureLoader = new THREE.TextureLoader();

    // Load real Earth day map & night lights
    const earthDayMap = textureLoader.load('/textures/earth-map.jpg');
    earthDayMap.colorSpace = THREE.SRGBColorSpace;
    earthDayMap.minFilter = THREE.LinearMipmapLinearFilter;
    earthDayMap.magFilter = THREE.LinearFilter;

    const earthNightMap = textureLoader.load('/textures/earth-night.jpg');
    earthNightMap.colorSpace = THREE.SRGBColorSpace;
    earthNightMap.minFilter = THREE.LinearMipmapLinearFilter;

    // Real Earth Photorealistic Sphere
    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthDayMap,
      emissiveMap: earthNightMap,
      emissive: new THREE.Color(0xFFDD99),
      emissiveIntensity: 0.35,
      roughness: 0.65,
      metalness: 0.15,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // Glowing Atmospheric Shell around Real Earth
    const atmosGeo = new THREE.SphereGeometry(globeRadius * 1.025, 64, 64);
    const atmosMat = new THREE.MeshStandardMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(atmosphere);

    // Subtle golden flight meridian coordinates grid
    const gridGeo = new THREE.SphereGeometry(globeRadius * 1.006, 36, 18);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xC89B3C,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(grid);

    // Helper: Convert Real Latitude / Longitude to Vector3 on the Real Earth Sphere
    function latLngToVector3(lat: number, lng: number, r: number = globeRadius): THREE.Vector3 {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    }

    // Delhi Hub Origin (28.6139° N, 77.2090° E)
    const delhiPos = latLngToVector3(28.6139, 77.2090, globeRadius);

    // Delhi Golden Beacon Pin
    const delhiMarkerGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const delhiMarkerMat = new THREE.MeshBasicMaterial({ color: 0xFFDD44 });
    const delhiMarker = new THREE.Mesh(delhiMarkerGeo, delhiMarkerMat);
    delhiMarker.position.copy(delhiPos);
    globeGroup.add(delhiMarker);

    // Delhi Pulsing Radar Ring
    const delhiPulseGeo = new THREE.RingGeometry(0.18, 0.48, 32);
    const delhiPulseMat = new THREE.MeshBasicMaterial({
      color: 0xC89B3C,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const delhiPulse = new THREE.Mesh(delhiPulseGeo, delhiPulseMat);
    delhiPulse.position.copy(delhiPos);
    delhiPulse.lookAt(globeGroup.position);
    globeGroup.add(delhiPulse);

    // Country Destination Markers and 3D Flight Arcs
    const countryMarkers: {
      id: string;
      mesh: THREE.Mesh;
      pos: THREE.Vector3;
      arcLine: THREE.Line;
      pulseParticle: THREE.Mesh;
      curve: THREE.QuadraticBezierCurve3;
    }[] = [];

    DESTINATION_COUNTRIES.forEach((c) => {
      const targetPos = latLngToVector3(c.lat, c.lng, globeRadius);

      // Interactive Marker pin on the real world map
      const markerGeo = new THREE.SphereGeometry(0.16, 16, 16);
      const markerMat = new THREE.MeshStandardMaterial({
        color: 0xC89B3C,
        emissive: 0x886611,
        metalness: 0.8,
        roughness: 0.2,
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(targetPos);
      marker.userData = { countryId: c.id, countryName: c.name };
      globeGroup.add(marker);

      // High-altitude 3D Flight Arc between Delhi and Target on Real Earth
      const midPoint = new THREE.Vector3().addVectors(delhiPos, targetPos).multiplyScalar(0.5);
      const distance = delhiPos.distanceTo(targetPos);
      const altitude = globeRadius + Math.max(0.8, distance * 0.28);
      midPoint.normalize().multiplyScalar(altitude);

      const curve = new THREE.QuadraticBezierCurve3(delhiPos, midPoint, targetPos);
      const curvePoints = curve.getPoints(44);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const arcMat = new THREE.LineDashedMaterial({
        color: 0xC89B3C,
        dashSize: 0.25,
        gapSize: 0.15,
        transparent: true,
        opacity: 0.75,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      arcLine.computeLineDistances();
      globeGroup.add(arcLine);

      // Glowing photon pulse traversing the route
      const pulseGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({ color: 0xFFF5CC });
      const pulseParticle = new THREE.Mesh(pulseGeo, pulseMat);
      globeGroup.add(pulseParticle);

      countryMarkers.push({
        id: c.id,
        mesh: marker,
        pos: targetPos,
        arcLine,
        pulseParticle,
        curve,
      });
    });

    // 6. REAL SWISA BOEING 737 AIRLINER (using airplane.png)
    const airliner: AirlinerComponents = createPhotorealisticSwisaAirliner({
      scale: 0.72,
      texturePath: '/airplane.png',
    });
    scene.add(airliner.root);

    // Initial position of Swisa airliner
    airliner.root.position.set(2.5, 2.8, 9.5);
    airliner.root.rotation.set(0.1, 0.4, -0.15);

    // 7. Raycaster for Interactive Country Selection on Real Globe
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Parallax drift
      if (!reducedMotion) {
        targetCameraOffset.x = mouse.x * 0.7;
        targetCameraOffset.y = mouse.y * 0.5;
      }

      // Check marker hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        countryMarkers.map((cm) => cm.mesh)
      );

      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.countryId;
        setHoveredCountry(hitId);
        container.style.cursor = 'pointer';
      } else {
        setHoveredCountry(null);
        container.style.cursor = 'default';
      }
    };

    const handleClick = (e: MouseEvent) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        countryMarkers.map((cm) => cm.mesh)
      );

      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.countryId;
        setActiveCountry(hitId);
        if (onSelectCountry) {
          onSelectCountry(hitId);
        }
      }
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('click', handleClick);

    // 8. Scroll-Linked Animation State
    let scrollY = window.scrollY || 0;
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      targetScrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 9. Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 10. Flight Physics & Render Loop
    const clock = new THREE.Clock();
    const targetCameraOffset = { x: 0, y: 0 };
    const currentCameraOffset = { x: 0, y: 0 };

    // Initial globe orientation centered on the Middle East / India corridor
    let globeTargetRotY = -1.2;
    let globeTargetRotX = 0.25;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll interpolation
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.06;

      // Parallax smooth interpolation
      currentCameraOffset.x += (targetCameraOffset.x - currentCameraOffset.x) * 0.05;
      currentCameraOffset.y += (targetCameraOffset.y - currentCameraOffset.y) * 0.05;

      // Pulse Delhi radar ring
      delhiPulse.scale.setScalar(1 + Math.sin(elapsedTime * 4) * 0.3);
      (delhiPulse.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.sin(elapsedTime * 4) * 0.3;

      // Animate flight arc photons & highlight selected country
      countryMarkers.forEach((cm, index) => {
        const speed = 0.45 + (index % 3) * 0.15;
        const t = (elapsedTime * speed + index * 0.2) % 1.0;
        const pos = cm.curve.getPoint(t);
        cm.pulseParticle.position.copy(pos);

        const isSelected = cm.id === activeCountry;
        const isHovered = cm.id === hoveredCountry;
        const markerScale = isSelected ? 2.0 : isHovered ? 1.5 : 1.0;
        cm.mesh.scale.lerp(new THREE.Vector3(markerScale, markerScale, markerScale), 0.15);

        const mat = cm.mesh.material as THREE.MeshStandardMaterial;
        if (isSelected) {
          mat.color.setHex(0xFFDD44);
          mat.emissive.setHex(0xC89B3C);
        } else {
          mat.color.setHex(0xC89B3C);
          mat.emissive.setHex(0x553300);
        }
      });

      // Update Real Earth orientation: orient towards selected country or slow planetary rotation
      if (activeCountry) {
        const found = DESTINATION_COUNTRIES.find((c) => c.id === activeCountry);
        if (found) {
          globeTargetRotY = -(found.lng * Math.PI) / 180 - Math.PI * 0.5;
          globeTargetRotX = (found.lat * Math.PI) / 180 * 0.65;
        }
      } else if (!reducedMotion) {
        globeTargetRotY += 0.0012;
      }

      globeGroup.rotation.y += (globeTargetRotY - globeGroup.rotation.y) * 0.04;
      globeGroup.rotation.x += (globeTargetRotX - globeGroup.rotation.x) * 0.04;

      // --- SCROLL-LINKED FLIGHT TRAJECTORY ---
      const p = currentScrollProgress;

      if (p < 0.25) {
        // Hero Section: Swisa 737 flies across the real Earth globe from LEFT to RIGHT with realistic banking
        const subP = p / 0.25;
        globeGroup.position.x = 4.2 - subP * 1.5;
        globeGroup.position.y = -0.6 + subP * 1.0;
        globeGroup.scale.setScalar(1.0 - subP * 0.15);

        const flightRadiusX = 8.0;
        const flightRadiusZ = 7.0;
        // Sweeping angle moving from left (-X) across to right (+X)
        const angle = -elapsedTime * 0.55 - subP * 1.8;

        const planeX = globeGroup.position.x - Math.cos(angle) * flightRadiusX * 0.75;
        const planeZ = globeGroup.position.z + Math.sin(angle) * flightRadiusZ * 0.75 + 5.0;
        const planeY = globeGroup.position.y + Math.sin(angle * 2) * 1.2 + 1.8;

        airliner.root.position.lerp(new THREE.Vector3(planeX, planeY, planeZ), 0.1);

        // Aerodynamic Banking for Left-to-Right flight:
        const targetRotY = angle + Math.PI * 0.45;
        const targetRotZ = Math.cos(angle) * 0.28; // Bank roll into curve
        const targetRotX = Math.sin(angle * 2) * 0.10; // Pitch during altitude shift

        airliner.root.rotation.y = targetRotY;
        airliner.root.rotation.z = targetRotZ;
        airliner.root.rotation.x = targetRotX;

        camera.position.x = currentCameraOffset.x;
        camera.position.y = 2.5 + currentCameraOffset.y;
        camera.position.z = 23;
      } else if (p < 0.55) {
        // Country Explorer Section: Real Globe centers, Swisa 737 positions near the active route
        const subP = (p - 0.25) / 0.3;
        globeGroup.position.x = 2.0 - subP * 2.0;
        globeGroup.position.y = 0.4 - subP * 0.2;
        globeGroup.scale.setScalar(0.9 + subP * 0.25);

        const activeMarker = countryMarkers.find((cm) => cm.id === activeCountry) || countryMarkers[0];
        const worldTarget = activeMarker.pos.clone().applyMatrix4(globeGroup.matrixWorld);

        const swoopPos = worldTarget.clone().add(new THREE.Vector3(1.5, 2.0, 3.8));
        airliner.root.position.lerp(swoopPos, 0.07);
        airliner.root.rotation.y = globeGroup.rotation.y + 0.15;
        airliner.root.rotation.z = 0.15;
        airliner.root.rotation.x = -0.05;

        camera.position.x = currentCameraOffset.x;
        camera.position.y = 2.0 + currentCameraOffset.y;
        camera.position.z = 21;
      } else {
        // Services & Lower Sections: Real Globe recedes, Swisa 737 cruises high-altitude from LEFT to RIGHT
        const subP = (p - 0.55) / 0.45;
        globeGroup.position.x = -6.5 + subP * 3.0;
        globeGroup.position.y = -2.2 - subP * 1.5;
        globeGroup.scale.setScalar(0.7 - subP * 0.25);

        const cruiseX = -16 + ((elapsedTime * 5.0 + subP * 32) % 36);
        const cruiseY = 2.4 + Math.sin(elapsedTime * 1.6) * 0.35;
        const cruiseZ = 12 + Math.sin(elapsedTime * 0.8) * 1.2;

        airliner.root.position.lerp(new THREE.Vector3(cruiseX, cruiseY, cruiseZ), 0.12);
        airliner.root.rotation.y = 0.08; // facing rightward
        airliner.root.rotation.z = 0.08; // positive climb bank
        airliner.root.rotation.x = -0.04;

        camera.position.x = currentCameraOffset.x;
        camera.position.y = 2.0 + currentCameraOffset.y;
        camera.position.z = 24;
      }

      // Update Swisa airliner navigation lights, strobes, and jet engine contrails
      airliner.updateAnimation(elapsedTime, 1.0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('click', handleClick);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeCountry, reducedMotion]);

  if (!webglSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-sky-ink text-cloud p-6 text-center">
        <div className="max-w-md bg-sky-ink-deep/80 p-8 rounded-xl border border-brass/30 backdrop-blur-md">
          <img src="/airplane.png" alt="Swisa Airliner" className="w-44 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-bold font-display text-cloud mb-2">High Altitude Global Flight Grid</h3>
          <p className="text-sm text-cloud/70 font-mono-tag">
            Consular corridors connecting New Delhi with Saudi Arabia, Kuwait, UAE, UK, and worldwide destinations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden"
      style={{ zIndex: 0 }}
      aria-label="3D Interactive Real Earth Globe and Swisa Flight Simulation"
    />
  );
};
