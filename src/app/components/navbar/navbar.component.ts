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

    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-menu-items a').forEach(link => {
      link.addEventListener('click', () => {
        menu?.classList.remove('open');
      });
    });
  }
}
