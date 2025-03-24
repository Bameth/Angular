import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { PanierService } from '../../../shared/services/impl/panier.service';

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public panierService: PanierService) { }

}
