import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanierService } from '../../services/impl/panier.service';
import { AuthentificationMockService } from '../../services/impl/authentification-mock.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isClients: boolean = false;
  protected links: Link[] = [];
  constructor(public panierService: PanierService, public authService: AuthentificationMockService) {

  }
  ngOnInit(): void {
    this.isClients = this.authService.hasRole('client');
    this.links = [
      {
        name: 'Catalogue',
        path: '/catalogue',
        class: "text-gray-800 hover:text-black relative font-medium group",
        ariaCurrent: "page",
        isVisible: true
      },
      {
        name: 'Mes Commandes',
        path: '/catalogue/commandes',
        class: "text-gray-800 hover:text-black relative font-medium group",
        ariaCurrent: "page",
        isVisible: this.isClients
      },
    ];
  }
}
interface Link {
  name: string;
  path: string;
  class: string;
  sublinks?: Array<Link>;
  ariaCurrent?: string;
  isVisible: boolean;
}