import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const inicioBtn = document.getElementById('inicioBtn');
    const heroImage = document.querySelector('.hero-image') as HTMLElement;

    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
    });
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroImage.classList.add('show', 'animate__animated', 'animate__bounceInDown');
          obs.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.3 });

    observer.observe(heroImage);
    if (inicioBtn && heroImage) {
      inicioBtn.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
          heroImage.classList.remove('show', 'animate__animated', 'animate__bounceInDown');

          void heroImage.offsetWidth;
          heroImage.classList.add('show', 'animate__animated', 'animate__bounceInDown');
        }, 300);
      });
    }
  }
}
