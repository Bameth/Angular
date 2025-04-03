import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanierService } from '../../../shared/services/impl/panier.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links: Link[] = [
    {
      name: 'Catalogue',
      path: '/catalogue',
      class: "text-gray-800 hover:text-black relative font-medium group",
      ariaCurrent: "page"
    },
  ];
}
interface Link {
  name: string;
  path: string;
  class: string;
  sublinks?: Array<Link>;
  ariaCurrent?: string;
}