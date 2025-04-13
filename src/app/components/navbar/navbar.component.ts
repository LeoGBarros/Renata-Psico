import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');

    // ✅ Abre/fecha o menu ao clicar no botão hamburguer
    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
    });

    // ✅ Fecha o menu ao clicar em qualquer link do menu mobile
    document.querySelectorAll('.mobile-menu-items a').forEach(link => {
      link.addEventListener('click', () => {
        menu?.classList.remove('open');
      });
    });
  }
}
