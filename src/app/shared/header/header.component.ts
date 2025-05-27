import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private LoginService: LoginService, private router: Router) { }

  @Input() title?: string = '';
  @Input() home?: string = '';
  @Input() courses?: string = '';
  @Input() upload?: string = '';
  @Input() header?: string = '';
  @Input() div?: string = '';
  @Input() h1?: string = '';
  @Input() nav?: string = '';
  @Input() ul?: string = '';
  @Input() a?: string = '';



  logoutUser() {
    this.LoginService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']); // Redirige al usuario a la página de login
      },
      error: (error) => {
        console.error('Error cerrando sesión:', error);
      }
    });
  }

}
