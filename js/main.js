import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const canvasContainer = document.getElementById('three-bg');
canvasContainer.appendChild(renderer.domElement);

camera.position.z = 5;


const geometry = new THREE.IcosahedronGeometry(1.5, 1);


const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.2,
  roughness: 0.1,
  transmission: 1,
  thickness: 0.5,
  transparent: true,
  opacity: 0.8
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);


const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x88ccff, 5);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);


let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
});


function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.002;
  sphere.rotation.y += 0.003;

  sphere.position.x += (mouseX - sphere.position.x) * 0.02;
  sphere.position.y += (-mouseY - sphere.position.y) * 0.02;

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});