import { Component } from '@angular/core';
import { PanierService } from '../../../shared/services/impl/panier.service';
import { TruncatePipe } from "../../../shared/pipes/truncate.pipe";
import { ProduitCatalogue } from '../../../shared/model/catalogue.model';
import { Router, RouterModule } from '@angular/router';
import { AuthentificationMockService } from '../../../shared/services/impl/authentification-mock.service';

@Component({
  selector: 'app-panier-catalogue',
  imports: [TruncatePipe,RouterModule],
  templateUrl: './panier-catalogue.component.html',
  styleUrl: './panier-catalogue.component.css'
})
export class PanierCatalogueComponent {
  onRemoveItem(produit: ProduitCatalogue): void {
    this.panierService.deleteProduct(produit);
  }
 

  incrementerProduit(produit: ProduitCatalogue): void {
    this.panierService.incrementProduct(produit);
  }

  decrementerProduit(produit: ProduitCatalogue): void {
    this.panierService.decrementProduct(produit);
  }
  constructor(public panierService: PanierService, private router: Router) { }
}
