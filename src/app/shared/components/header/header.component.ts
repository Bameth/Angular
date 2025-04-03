import { Component } from '@angular/core';
import { PanierService } from '../../services/impl/panier.service';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { AuthentificationMockService } from '../../services/impl/authentification-mock.service';

@Component({
  selector: 'app-header',
  imports: [NavComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public panierService: PanierService, private router: Router, public authService: AuthentificationMockService) { }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/catalogue');
  }
}
