import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitCatalogue } from '../../../shared/model/catalogue.model';
import { PanierService } from '../../../shared/services/impl/panier.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input({
    alias: 'produit',
    required: true
  }) produit!: ProduitCatalogue;
  constructor(public router: Router, private panierService: PanierService) {
  }
  onLoadViewDetail(id: number) {
    this.router.navigateByUrl(`/catalogue/detail/${id}`);
  }
  onAddPanier(produit: ProduitCatalogue) {
    this.panierService.addProduct({
      ...produit,
      quantiteCom: 1
    });
  }
}
