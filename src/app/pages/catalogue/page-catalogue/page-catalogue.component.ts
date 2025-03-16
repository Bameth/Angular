import { Component, inject, OnInit } from '@angular/core';
import { ProductItemComponent } from "../../../components/catalogue/product-item/product-item.component";
import { CatalogueService } from '../../../shared/services/impl/catalogue.service';
import { ProduitCatalogue } from '../../../shared/model/catalogue.model';

@Component({
  selector: 'app-page-catalogue',
  imports: [ProductItemComponent],
  templateUrl: './page-catalogue.component.html',
  styleUrl: './page-catalogue.component.css'
})
export class PageCatalogueComponent implements OnInit {
  // constructor(private catalogueService:CatalogueService ) {
  // }
  private catalogueService: CatalogueService = inject(CatalogueService);
  products: ProduitCatalogue[] = [];
  ngOnInit(): void {
    this.products = this.catalogueService.produits;
  }
}
