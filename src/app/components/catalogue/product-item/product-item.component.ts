import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitCatalogue } from '../../../shared/model/catalogue.model';

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
  constructor(public router: Router) {
  }
  onLoadViewDetail(id: number) {
    this.router.navigateByUrl('/catalogue/detail');
  }

}
