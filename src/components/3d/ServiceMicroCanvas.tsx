import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createRealisticAirliner } from './RealAirplaneModel';
import { getAssetUrl } from '../../utils/assetHelper';

interface ServiceMicroCanvasProps {
  serviceId: string;
}

export const ServiceMicroCanvas: React.FC<ServiceMicroCanvasProps> = ({ serviceId }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 4.5, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff0d0, 2.0);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const goldLight = new THREE.PointLight(0xC89B3C, 2.5, 15);
    goldLight.position.set(-3, 4, 3);
    scene.add(goldLight);

    const clock = new THREE.Clock();
    let startTime = 0;

    // Service-specific 3D scenes
    if (serviceId === 'saudi-visa-stamping' || serviceId === 'kuwait-visa-stamping' || serviceId === 'visa-stamping-services') {
      // 3D Passport + Brass Visa Stamp
      const passportGroup = new THREE.Group();
      passportGroup.position.set(0, -0.4, 0);
      scene.add(passportGroup);

      // Passport Base Cover (Deep Navy)
      const coverMat = new THREE.MeshStandardMaterial({
        color: 0x071A33,
        roughness: 0.4,
        metalness: 0.3,
      });
      const pageMat = new THREE.MeshStandardMaterial({
        color: 0xF5F4EF,
        roughness: 0.6,
      });
      const brassMat = new THREE.MeshStandardMaterial({
        color: 0xC89B3C,
        metalness: 0.9,
        roughness: 0.2,
      });

      // Passport pages book
      const bookGeo = new THREE.BoxGeometry(3.6, 0.25, 2.6);
      const book = new THREE.Mesh(bookGeo, pageMat);
      passportGroup.add(book);

      // Embossed cover border
      const coverGeo = new THREE.BoxGeometry(3.68, 0.08, 2.68);
      const coverBottom = new THREE.Mesh(coverGeo, coverMat);
      coverBottom.position.y = -0.16;
      passportGroup.add(coverBottom);

      // Gold visa sticker placeholder on right page
      const stickerGeo = new THREE.PlaneGeometry(1.4, 1.9);
      stickerGeo.rotateX(-Math.PI / 2);
      const stickerMat = new THREE.MeshStandardMaterial({
        color: 0xE8DFCA,
        roughness: 0.5,
      });
      const sticker = new THREE.Mesh(stickerGeo, stickerMat);
      sticker.position.set(0.85, 0.13, 0);
      passportGroup.add(sticker);

      // Brass Visa Stamp Tool (Handle + Head)
      const stampGroup = new THREE.Group();
      stampGroup.position.set(0.85, 4.0, 0);
      scene.add(stampGroup);

      // Stamp head
      const stampHeadGeo = new THREE.BoxGeometry(1.2, 0.3, 0.9);
      const stampHead = new THREE.Mesh(stampHeadGeo, brassMat);
      stampGroup.add(stampHead);

      // Stamp handle
      const handleGeo = new THREE.CylinderGeometry(0.18, 0.28, 1.4, 16);
      const handleMat = new THREE.MeshStandardMaterial({
        color: 0x1A2634,
        roughness: 0.4,
      });
      const handle = new THREE.Mesh(handleGeo, handleMat);
      handle.position.y = 0.85;
      stampGroup.add(handle);

      // Stamp top knob
      const knobGeo = new THREE.SphereGeometry(0.32, 16, 16);
      const knob = new THREE.Mesh(knobGeo, brassMat);
      knob.position.y = 1.6;
      stampGroup.add(knob);

      // Visa stamp ink mark (revealed upon stamping)
      const inkMarkGeo = new THREE.RingGeometry(0.2, 0.42, 24);
      inkMarkGeo.rotateX(-Math.PI / 2);
      const inkMarkMat = new THREE.MeshBasicMaterial({
        color: 0x991B1B,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
      });
      const inkMark = new THREE.Mesh(inkMarkGeo, inkMarkMat);
      inkMark.position.set(0.85, 0.135, 0);
      passportGroup.add(inkMark);

      // Stamping squash and settle animation
      const animatePassport = () => {
        animationFrameId = requestAnimationFrame(animatePassport);
        const elapsed = clock.getElapsedTime();

        // Stamping sequence happens between 0.6s and 1.8s
        if (elapsed > 0.6 && elapsed < 1.3) {
          const t = (elapsed - 0.6) / 0.7;
          // Drop down quickly
          stampGroup.position.y = 4.0 - t * 3.75;
          stampGroup.rotation.z = Math.sin(t * Math.PI) * 0.08;
        } else if (elapsed >= 1.3 && elapsed < 1.8) {
          // Squash and rise
          stampGroup.position.y = 0.25 + (elapsed - 1.3) * 1.5;
          inkMarkMat.opacity = 0.85;
          if (!stamped) setStamped(true);
        } else if (elapsed >= 1.8) {
          // Resting elevated position
          stampGroup.position.y = 1.0;
        }

        passportGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.08 - 0.15;
        renderer.render(scene, camera);
      };
      animatePassport();

    } else if (serviceId === 'air-ticketing') {
      // Runway strip + Realistic Airliner Taking Off Straight
      const runwayGroup = new THREE.Group();
      scene.add(runwayGroup);

      // Runway tarmac extending horizontally along the flight corridor
      const tarmacGeo = new THREE.BoxGeometry(18, 0.15, 3.8);
      const tarmacMat = new THREE.MeshStandardMaterial({
        color: 0x1E293B,
        roughness: 0.8,
      });
      const tarmac = new THREE.Mesh(tarmacGeo, tarmacMat);
      tarmac.position.set(0, -1.2, 0);
      runwayGroup.add(tarmac);

      // Runway dashed centerline markings along X
      for (let i = -7; i <= 7; i++) {
        const markGeo = new THREE.PlaneGeometry(0.8, 0.18);
        markGeo.rotateX(-Math.PI / 2);
        const markMat = new THREE.MeshBasicMaterial({ color: 0xC89B3C });
        const mark = new THREE.Mesh(markGeo, markMat);
        mark.position.set(i * 1.2, -1.12, 0);
        runwayGroup.add(mark);
      }

      // Runway edge guidance lights
      for (let i = -7; i <= 7; i += 2) {
        const lightMat = new THREE.MeshBasicMaterial({ color: i > 2 ? 0x22C55E : 0xF59E0B });
        const topLight = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), lightMat);
        topLight.position.set(i * 1.2, -1.1, -1.7);
        runwayGroup.add(topLight);

        const bottomLight = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), lightMat);
        bottomLight.position.set(i * 1.2, -1.1, 1.7);
        runwayGroup.add(bottomLight);
      }

      // Swisa Airliner taking off straight along runway
      const airliner = createRealisticAirliner({ scale: 0.48, texturePath: getAssetUrl('airplane.png') });
      scene.add(airliner.root);
      airliner.root.position.set(-6, -0.65, 0);

      const animateTakeoff = () => {
        animationFrameId = requestAnimationFrame(animateTakeoff);
        const elapsed = clock.getElapsedTime();

        // Takeoff sequence: ground roll -> rotate nose up -> climb into the sky
        const progress = (elapsed * 0.28) % 1.0;
        const posX = -6.5 + progress * 13.5;
        
        // Ground roll for first 30%, then climb smoothly
        let posY = -0.65;
        let pitchAngle = 0;
        
        if (progress > 0.3) {
          const climbT = (progress - 0.3) / 0.7;
          posY = -0.65 + Math.pow(climbT, 1.3) * 3.8;
          pitchAngle = Math.min(0.24, climbT * 0.32); // Nose pitch up into climb
        }

        airliner.root.position.x = posX;
        airliner.root.position.y = posY;
        airliner.root.position.z = 0;
        
        airliner.root.rotation.x = 0;
        airliner.root.rotation.y = 0;
        airliner.root.rotation.z = pitchAngle + Math.sin(elapsed * 2) * 0.015; // Dynamic climb rotation

        airliner.updateAnimation(elapsed, 1.2);
        renderer.render(scene, camera);
      };
      animateTakeoff();

    } else if (serviceId === 'hajj-umrah') {
      // Holy Kaaba image + Tawaf Revolving Crowd
      const hajjGroup = new THREE.Group();
      scene.add(hajjGroup);
      hajjGroup.position.set(0, -0.4, 0);

      // 1. Mataf White Marble Courtyard Floor
      const matafGeo = new THREE.CylinderGeometry(5.2, 5.2, 0.12, 64);
      const matafMat = new THREE.MeshStandardMaterial({
        color: 0xF7F6F2,
        roughness: 0.25,
        metalness: 0.1,
      });
      const matafFloor = new THREE.Mesh(matafGeo, matafMat);
      matafFloor.position.y = -0.06;
      hajjGroup.add(matafFloor);

      // Subtle Golden Concentric Floor Inlays
      for (let r = 2.0; r <= 4.8; r += 0.7) {
        const ringGeo = new THREE.RingGeometry(r, r + 0.03, 64);
        ringGeo.rotateX(-Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xC89B3C,
          transparent: true,
          opacity: 0.35,
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.y = 0.002;
        hajjGroup.add(ringMesh);
      }

      // 2. The Holy Kaaba Image (kaba.png) - Static, Non-Rotating
      const textureLoader = new THREE.TextureLoader();
      const kabaTexture = textureLoader.load(getAssetUrl('kaba.png'));
      kabaTexture.colorSpace = THREE.SRGBColorSpace;
      kabaTexture.minFilter = THREE.LinearMipmapLinearFilter;
      kabaTexture.magFilter = THREE.LinearFilter;

      const kabaMat = new THREE.MeshBasicMaterial({
        map: kabaTexture,
        transparent: true,
        alphaTest: 0.05,
        side: THREE.DoubleSide,
      });

      // Upright plane facing camera angle
      const kabaGeo = new THREE.PlaneGeometry(3.0, 3.0);
      const kabaMesh = new THREE.Mesh(kabaGeo, kabaMat);
      kabaMesh.position.set(0, 1.48, 0);
      kabaMesh.rotation.x = -0.30; // Tilt to face camera viewpoint directly
      hajjGroup.add(kabaMesh);

      // 3. Pilgrims Revolving in Tawaf (Counter-Clockwise) - Rotating Crowd
      const pilgrimGroup = new THREE.Group();
      hajjGroup.add(pilgrimGroup);

      const pilgrimMat = new THREE.MeshStandardMaterial({
        color: 0xF3F4F6,
        roughness: 0.6,
      });
      const pilgrimGeo = new THREE.CapsuleGeometry(0.06, 0.16, 4, 8);

      const ringsConfig = [
        { radius: 1.85, count: 24, speed: 0.55 },
        { radius: 2.35, count: 32, speed: 0.46 },
        { radius: 2.85, count: 40, speed: 0.38 },
        { radius: 3.40, count: 48, speed: 0.31 },
        { radius: 4.00, count: 56, speed: 0.25 },
        { radius: 4.60, count: 64, speed: 0.20 },
      ];

      const pilgrimRings: { mesh: THREE.InstancedMesh; speed: number }[] = [];

      ringsConfig.forEach((ring) => {
        const instMesh = new THREE.InstancedMesh(pilgrimGeo, pilgrimMat, ring.count);
        const dummy = new THREE.Object3D();

        for (let i = 0; i < ring.count; i++) {
          const angle = (i / ring.count) * Math.PI * 2;
          const rOffset = (Math.random() - 0.5) * 0.15;
          const x = Math.cos(angle) * (ring.radius + rOffset);
          const z = Math.sin(angle) * (ring.radius + rOffset);
          dummy.position.set(x, 0.15, z);
          dummy.scale.set(
            0.9 + Math.random() * 0.2,
            0.9 + Math.random() * 0.2,
            0.9 + Math.random() * 0.2
          );
          dummy.updateMatrix();
          instMesh.setMatrixAt(i, dummy.matrix);
        }
        instMesh.instanceMatrix.needsUpdate = true;
        pilgrimGroup.add(instMesh);
        pilgrimRings.push({ mesh: instMesh, speed: ring.speed });
      });

      // Spiritual warm golden spotlight
      const spiritualLight = new THREE.PointLight(0xFFE899, 3.0, 10);
      spiritualLight.position.set(0, 4.5, 0);
      hajjGroup.add(spiritualLight);

      const animateHajj = () => {
        animationFrameId = requestAnimationFrame(animateHajj);
        const elapsed = clock.getElapsedTime();

        // Kaaba and Mataf remain fixed (no rotation on Kaaba)
        hajjGroup.rotation.y = 0;

        // Counter-clockwise revolving of pilgrim rings only (Tawaf crowd)
        pilgrimRings.forEach((ring) => {
          ring.mesh.rotation.y = elapsed * ring.speed;
        });

        renderer.render(scene, camera);
      };
      animateHajj();

    } else if (serviceId === 'manpower-services') {
      // Workforce Network Constellation
      const netGroup = new THREE.Group();
      scene.add(netGroup);

      const nodeCount = 14;
      const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0xC89B3C,
        metalness: 0.8,
        roughness: 0.2,
      });

      const nodes: THREE.Vector3[] = [];
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const radius = 2.2 + (i % 3) * 0.4;
        const pos = new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.8,
          Math.sin(angle) * radius
        );
        nodes.push(pos);
        const sphere = new THREE.Mesh(nodeGeo, nodeMat);
        sphere.position.copy(pos);
        netGroup.add(sphere);
      }

      // Connecting brass network lines
      const linesMat = new THREE.LineBasicMaterial({
        color: 0xC89B3C,
        transparent: true,
        opacity: 0.45,
      });
      const linesGeo = new THREE.BufferGeometry();
      const linePts: THREE.Vector3[] = [];
      for (let i = 0; i < nodes.length; i++) {
        const next = nodes[(i + 1) % nodes.length];
        const skip = nodes[(i + 3) % nodes.length];
        linePts.push(nodes[i], next);
        linePts.push(nodes[i], skip);
      }
      linesGeo.setFromPoints(linePts);
      const netLines = new THREE.LineSegments(linesGeo, linesMat);
      netGroup.add(netLines);

      // Central core node
      const coreGeo = new THREE.SphereGeometry(0.42, 24, 24);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x0B2545,
        emissive: 0x071A33,
        roughness: 0.3,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      netGroup.add(core);

      const animateNetwork = () => {
        animationFrameId = requestAnimationFrame(animateNetwork);
        const elapsed = clock.getElapsedTime();
        netGroup.rotation.y = elapsed * 0.3;
        netGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.15;
        renderer.render(scene, camera);
      };
      animateNetwork();

    } else if (serviceId === 'document-attestation') {
      // 3D Document Stack with Golden Wax Seal / MEA Stamp
      const docGroup = new THREE.Group();
      scene.add(docGroup);

      const paperMat = new THREE.MeshStandardMaterial({ color: 0xF5F4EF, roughness: 0.7 });
      const goldSealMat = new THREE.MeshStandardMaterial({ color: 0xC89B3C, metalness: 0.85, roughness: 0.2 });

      // Stack of papers
      for (let i = 0; i < 4; i++) {
        const sheetGeo = new THREE.BoxGeometry(3.0, 0.04, 3.8);
        const sheet = new THREE.Mesh(sheetGeo, paperMat);
        sheet.position.set((i - 1.5) * 0.06, (i - 1.5) * 0.06 - 0.5, (i - 1.5) * 0.04);
        sheet.rotation.y = (i - 1.5) * 0.04;
        docGroup.add(sheet);
      }

      // Golden Official Wax Seal Stamp
      const sealGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.1, 24);
      const seal = new THREE.Mesh(sealGeo, goldSealMat);
      seal.position.set(0.65, -0.32, 0.85);
      docGroup.add(seal);

      // Seal ribbon
      const ribbonGeo = new THREE.BoxGeometry(0.3, 0.02, 1.2);
      const ribbonMat = new THREE.MeshBasicMaterial({ color: 0x991B1B });
      const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
      ribbon.position.set(0.65, -0.34, 1.4);
      ribbon.rotation.y = 0.2;
      docGroup.add(ribbon);

      const animateDoc = () => {
        animationFrameId = requestAnimationFrame(animateDoc);
        const elapsed = clock.getElapsedTime();
        docGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.15;
        docGroup.position.y = Math.sin(elapsed * 0.8) * 0.08;
        renderer.render(scene, camera);
      };
      animateDoc();

    } else {
      // Generic / Travel / Pilgrimage 3D Real Earth Globe with Swisa Flight Horizon
      const miniGlobe = new THREE.Group();
      scene.add(miniGlobe);

      const textureLoader = new THREE.TextureLoader();
      const earthDayMap = textureLoader.load(getAssetUrl('textures/earth-map.jpg'));
      earthDayMap.colorSpace = THREE.SRGBColorSpace;

      const sphereGeo = new THREE.SphereGeometry(2.3, 48, 48);
      const sphereMat = new THREE.MeshStandardMaterial({
        map: earthDayMap,
        roughness: 0.65,
        metalness: 0.15,
      });
      const realEarthSphere = new THREE.Mesh(sphereGeo, sphereMat);
      miniGlobe.add(realEarthSphere);

      // Atmosphere rim
      const atmosGeo = new THREE.SphereGeometry(2.36, 32, 32);
      const atmosMat = new THREE.MeshBasicMaterial({
        color: 0x38BDF8,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      });
      const atmos = new THREE.Mesh(atmosGeo, atmosMat);
      miniGlobe.add(atmos);

      const airliner = createRealisticAirliner({ scale: 0.35, texturePath: getAssetUrl('airplane.png') });
      scene.add(airliner.root);

      const animateGlobeFlight = () => {
        animationFrameId = requestAnimationFrame(animateGlobeFlight);
        const elapsed = clock.getElapsedTime();
        miniGlobe.rotation.y = elapsed * 0.2;

        const planeAngle = elapsed * 0.6;
        airliner.root.position.set(
          Math.cos(planeAngle) * 3.4,
          Math.sin(planeAngle * 2) * 0.6 + 0.3,
          Math.sin(planeAngle) * 3.4
        );
        airliner.root.rotation.y = -planeAngle - Math.PI * 0.5;
        airliner.root.rotation.z = -0.3;
        airliner.updateAnimation(elapsed, 1.0);

        renderer.render(scene, camera);
      };
      animateGlobeFlight();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [serviceId]);

  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-sky-ink-deep/60 border border-brass/25 shadow-xl flex items-center justify-center">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
