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

    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
    });

    // Reaproveita animações ao scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }
}
