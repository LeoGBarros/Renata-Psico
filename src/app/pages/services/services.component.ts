import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const serviceBtn = document.getElementById('serviceBtn');
    const cardLeft = document.getElementById('cardLeft');
    const cardRight = document.getElementById('cardRight');

    // ✅ Mobile menu toggle
    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
    });

    // ✅ Animações ao scroll (automático uma vez)
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // ✅ Reaplicar animações ao clicar no botão "Atuação"
    serviceBtn?.addEventListener('click', (e) => {
      // permite que o scroll funcione normalmente
      setTimeout(() => {
        if (cardLeft) {
          cardLeft.classList.remove('animate__bounceInLeft');
          void cardLeft.offsetWidth;
          cardLeft.classList.add('animate__bounceInLeft');
        }

        if (cardRight) {
          cardRight.classList.remove('animate__bounceInRight');
          void cardRight.offsetWidth;
          cardRight.classList.add('animate__bounceInRight');
        }
      }, 600); // tempo ideal para scroll + aplicar animação de novo
    });
  }
}
