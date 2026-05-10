import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

export function initParticles() {


  const particleContainer = document.createElement('div');

  particleContainer.classList.add('ambient-particles');

  document.body.appendChild(particleContainer);

  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement('span');

    particle.classList.add('ambient-particle');

    const size = Math.random() * 6 + 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particle.style.animationDuration = `${
      Math.random() * 10 + 10
    }s`;

    particle.style.animationDelay = `${
      Math.random() * 5
    }s`;

    particleContainer.appendChild(particle);
  }
}