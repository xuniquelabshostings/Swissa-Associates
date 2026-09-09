import * as THREE from 'three';

export interface AirlinerComponents {
  root: THREE.Group;
  fanBlades?: THREE.Mesh[];
  portStrobe: THREE.PointLight;
  starboardStrobe: THREE.PointLight;
  beaconLight: THREE.PointLight;
  tailStrobe: THREE.PointLight;
  contrails: THREE.Points;
  updateAnimation: (time: number, speed?: number) => void;
}

/**
 * Creates the photorealistic Swisa Associates Boeing 737 airliner using airplane.png
 * Oriented to fly forward from LEFT to RIGHT with active navigation strobes and contrails.
 */
export function createPhotorealisticSwisaAirliner(options?: {
  scale?: number;
  texturePath?: string;
  facingRight?: boolean;
}): AirlinerComponents {
  const scale = options?.scale ?? 1.0;
  const texturePath = options?.texturePath ?? '/airplane.png';
  const facingRight = options?.facingRight ?? true;

  const planeGroup = new THREE.Group();
  planeGroup.name = 'SwisaAirliner737';

  // Load the photorealistic Swisa airliner texture
  const textureLoader = new THREE.TextureLoader();
  const planeTexture = textureLoader.load(texturePath);
  planeTexture.colorSpace = THREE.SRGBColorSpace;
  planeTexture.minFilter = THREE.LinearMipmapLinearFilter;
  planeTexture.magFilter = THREE.LinearFilter;

  // Aspect ratio is 1774 x 887 = 2.0
  const planeWidth = 7.0;
  const planeHeight = 3.5;

  // Primary Aircraft Mesh with Swisa livery
  const planeGeo = new THREE.PlaneGeometry(planeWidth, planeHeight);
  if (facingRight) {
    // Flip horizontally so the plane nose faces forward to the RIGHT
    planeGeo.scale(-1, 1, 1);
  }

  const planeMat = new THREE.MeshStandardMaterial({
    map: planeTexture,
    transparent: true,
    alphaTest: 0.05,
    roughness: 0.35,
    metalness: 0.4,
    side: THREE.DoubleSide,
    depthWrite: true,
  });

  const mainPlane = new THREE.Mesh(planeGeo, planeMat);
  mainPlane.castShadow = true;
  planeGroup.add(mainPlane);

  // Subtle 3D volumetric cross-fins to give depth when viewed from angles
  const crossGeo = new THREE.PlaneGeometry(planeWidth * 0.9, 0.9);
  crossGeo.rotateX(Math.PI / 2);
  const crossMat = new THREE.MeshStandardMaterial({
    color: 0xF5F4EF,
    transparent: true,
    opacity: 0.25,
    roughness: 0.5,
  });
  const crossFin = new THREE.Mesh(crossGeo, crossMat);
  crossFin.position.set(0, -0.1, 0);
  planeGroup.add(crossFin);

  // Navigation & Strobe Lights aligned with right-facing flight geometry
  // Port (Left wing) = Red (top/inner side)
  const portStrobe = new THREE.PointLight(0xFF1E27, 3.5, 6);
  portStrobe.position.set(1.8, -0.65, 0.4);
  planeGroup.add(portStrobe);

  const redBulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xFF1E27 })
  );
  redBulb.position.copy(portStrobe.position);
  planeGroup.add(redBulb);

  // Starboard (Right wingtip) = Green
  const starboardStrobe = new THREE.PointLight(0x00FF66, 3.5, 6);
  starboardStrobe.position.set(-1.5, 0.5, -0.4);
  planeGroup.add(starboardStrobe);

  const greenBulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0x00FF66 })
  );
  greenBulb.position.copy(starboardStrobe.position);
  planeGroup.add(greenBulb);

  // Fuselage Anti-Collision Red Beacon (Pulsing on top of cabin)
  const beaconLight = new THREE.PointLight(0xFF0033, 4, 8);
  beaconLight.position.set(0.2, 0.8, 0.2);
  planeGroup.add(beaconLight);

  const beaconBulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xFF0033 })
  );
  beaconBulb.position.copy(beaconLight.position);
  planeGroup.add(beaconBulb);

  // Tail Vertical Fin White Strobe (tail is at -2.4 X when facing right)
  const tailStrobe = new THREE.PointLight(0xFFFFFF, 4, 8);
  tailStrobe.position.set(-2.4, 1.4, 0.1);
  planeGroup.add(tailStrobe);

  const tailBulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
  );
  tailBulb.position.copy(tailStrobe.position);
  planeGroup.add(tailBulb);

  // Twin Engine Jet Contrails (Vapor trails streaming backwards to the left behind engines)
  const contrailCount = 200;
  const contrailGeo = new THREE.BufferGeometry();
  const contrailPos = new Float32Array(contrailCount * 3);
  const contrailScales = new Float32Array(contrailCount);

  // Engine exhaust origins (turbofans under the wing)
  const engine1 = new THREE.Vector3(0.4, -0.6, -0.2);
  const engine2 = new THREE.Vector3(1.0, -0.5, 0.1);

  for (let i = 0; i < contrailCount; i++) {
    const isEng1 = i % 2 === 0;
    const base = isEng1 ? engine1 : engine2;
    const t = Math.floor(i / 2) / (contrailCount / 2); // 0 near engine, 1 trailing far back

    // Contrails expand and stream backwards to the left (negative X)
    contrailPos[i * 3 + 0] = base.x - t * 14.0 + (Math.random() - 0.5) * 0.3 * (1 + t * 4);
    contrailPos[i * 3 + 1] = base.y - t * 2.5 + (Math.random() - 0.5) * 0.25 * (1 + t * 3);
    contrailPos[i * 3 + 2] = base.z - t * 3.5 + (Math.random() - 0.5) * 0.3 * (1 + t * 4);
    contrailScales[i] = (1 - t);
  }

  contrailGeo.setAttribute('position', new THREE.BufferAttribute(contrailPos, 3));

  const contrailMat = new THREE.PointsMaterial({
    color: 0xEDF2F7,
    size: 0.38,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const contrails = new THREE.Points(contrailGeo, contrailMat);
  planeGroup.add(contrails);

  planeGroup.scale.set(scale, scale, scale);

  const updateAnimation = (time: number, speed: number = 1.0) => {
    // 1. Navigation strobe flashes
    const tailFlash = (time * 2.2) % 1.0 < 0.12 ? 5.0 : 0.2;
    tailStrobe.intensity = tailFlash;

    // Red beacon pulse
    const beaconPulse = (Math.sin(time * 3.8) + 1.0) * 1.8;
    beaconLight.intensity = beaconPulse;

    // Wingtip strobes
    const wingFlash = (time * 1.8) % 1.0 < 0.15 ? 4.5 : 0.9;
    portStrobe.intensity = wingFlash;
    starboardStrobe.intensity = wingFlash;

    // 2. Animate contrail particle stream flow (moving backwards to the left)
    const pos = contrailGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < contrailCount; i++) {
      const isEng1 = i % 2 === 0;
      const base = isEng1 ? engine1 : engine2;
      const idxX = i * 3 + 0;
      const idxY = i * 3 + 1;
      const idxZ = i * 3 + 2;

      pos[idxX] -= 0.25 * speed;
      pos[idxY] -= 0.04 * speed;
      pos[idxZ] -= 0.05 * speed;

      // Wrap around when trail fades out
      if (pos[idxX] < base.x - 14.0) {
        pos[idxX] = base.x;
        pos[idxY] = base.y;
        pos[idxZ] = base.z;
      }
    }
    contrailGeo.attributes.position.needsUpdate = true;
  };

  return {
    root: planeGroup,
    portStrobe,
    starboardStrobe,
    beaconLight,
    tailStrobe,
    contrails,
    updateAnimation,
  };
}

// Backwards-compatible alias
export const createRealisticAirliner = createPhotorealisticSwisaAirliner;
