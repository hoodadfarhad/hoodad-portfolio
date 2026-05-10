
const gsap = window.gsap;

export function initAnimations() {

  
    window.addEventListener('scroll', () => {
  
      const navbar = document.querySelector('.navbar');
  
      if (window.scrollY > 50) {
  
        navbar.style.background =
          'rgba(5, 8, 22, 0.8)';
  
        navbar.style.borderBottom =
          '1px solid rgba(255,255,255,0.08)';
  
      } else {
  
        navbar.style.background =
          'rgba(5, 8, 22, 0.45)';
      }
    });
  
    const buttons = document.querySelectorAll(
      '.primary-btn, .secondary-btn'
    );
  
    buttons.forEach((button) => {
  
      button.addEventListener('mousemove', (e) => {
  
        const rect = button.getBoundingClientRect();
  
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
  
        gsap.to(button, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
  
      button.addEventListener('mouseleave', () => {
  
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.4)'
        });
      });
    });
  
  
    gsap.to('.hero-image', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }