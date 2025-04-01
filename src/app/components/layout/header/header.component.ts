import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { PanierService } from '../../../shared/services/impl/panier.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public panierService: PanierService) { }

}
