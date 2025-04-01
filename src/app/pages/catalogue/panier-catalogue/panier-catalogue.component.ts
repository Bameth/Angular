import { Component } from '@angular/core';
import { PanierService } from '../../../shared/services/impl/panier.service';
import { TruncatePipe } from "../../../shared/pipes/truncate.pipe";

@Component({
  selector: 'app-panier-catalogue',
  imports: [TruncatePipe],
  templateUrl: './panier-catalogue.component.html',
  styleUrl: './panier-catalogue.component.css'
})
export class PanierCatalogueComponent {
  constructor(public panierService: PanierService) { }
}
