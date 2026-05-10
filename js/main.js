import { initThreeScene } from './threeScene.js';
import { initParticles } from './particles.js';
import { initAnimations } from './gsapAnimations.js';

console.log("MAIN LOADED");

try {
  initThreeScene();
  console.log("THREE OK");
} catch (err) {
  console.error("THREE FAILED", err);
}

try {
  initParticles();
  console.log("PARTICLES OK");
} catch (err) {
  console.error("PARTICLES FAILED", err);
}

try {
  initAnimations();
  console.log("ANIMATIONS OK");
} catch (err) {
  console.error("ANIMATIONS FAILED", err);
}