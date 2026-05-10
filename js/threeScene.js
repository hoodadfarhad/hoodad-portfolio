```js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

export function initThreeScene() {


  const container = document.getElementById('three-bg');

  if (!container) return;



  const scene = new THREE.Scene();



  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 6;


  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
  );

  renderer.outputColorSpace = THREE.SRGBColorSpace;

  container.appendChild(renderer.domElement);


  const geometry = new THREE.IcosahedronGeometry(1.7, 1);

  const material = new THREE.MeshPhysicalMaterial({

    color: 0x7c9cff,

    metalness: 0.15,
    roughness: 0.05,

    transmission: 1,
    thickness: 0.5,

    transparent: true,
    opacity: 0.85,

    clearcoat: 1,
    clearcoatRoughness: 0.1,

    emissive: 0x0a1020,
    emissiveIntensity: 0.8
  });

  const orb = new THREE.Mesh(geometry, material);

  orb.position.set(2.5, 0, 0);

  scene.add(orb);



  const smallGeometry = new THREE.IcosahedronGeometry(0.45, 1);

  const smallMaterial = new THREE.MeshStandardMaterial({
    color: 0x8ef6e4,
    emissive: 0x8ef6e4,
    emissiveIntensity: 0.5,
    roughness: 0.3,
    metalness: 0.5
  });

  const smallOrb = new THREE.Mesh(
    smallGeometry,
    smallMaterial
  );

  smallOrb.position.set(-2.5, 1.2, -1);

  scene.add(smallOrb);


  const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.4
  );

  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(
    0x7c9cff,
    18,
    100
  );

  pointLight1.position.set(5, 5, 5);

  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(
    0x8ef6e4,
    12,
    100
  );

  pointLight2.position.set(-5, -3, 2);

  scene.add(pointLight2);


  const particleGeometry = new THREE.BufferGeometry();

  const particleCount = 1200;

  const positions = new Float32Array(
    particleCount * 3
  );

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 25;
  }

  particleGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  );

  const particleMaterial = new THREE.PointsMaterial({

    color: 0xffffff,
    size: 0.015,

    transparent: true,
    opacity: 0.7
  });

  const particles = new THREE.Points(
    particleGeometry,
    particleMaterial
  );

  scene.add(particles);


  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (event) => {

    mouseX =
      (event.clientX / window.innerWidth - 0.5) * 2;

    mouseY =
      (event.clientY / window.innerHeight - 0.5) * 2;
  });



  const clock = new THREE.Clock();



  function animate() {

    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();


    orb.rotation.x += 0.002;
    orb.rotation.y += 0.003;


    orb.position.y = Math.sin(elapsedTime * 0.8) * 0.25;


    orb.position.x +=
      (mouseX * 1.5 - orb.position.x) * 0.02;

    orb.position.y +=
      (-mouseY * 0.8 - orb.position.y) * 0.02;


    smallOrb.rotation.y += 0.01;

    smallOrb.position.y =
      Math.sin(elapsedTime * 1.5) * 0.4 + 1;


    particles.rotation.y += 0.0004;
    particles.rotation.x += 0.0001;

    renderer.render(scene, camera);
  }

  animate();



  window.addEventListener('resize', () => {

    camera.aspect =
      window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );
  });
}
```
