import { Component, inject, OnInit } from '@angular/core';
import { CatalogueService } from '../../../shared/services/impl/catalogue.service';
import { ProduitCatalogue } from '../../../shared/model/catalogue.model';
import { ProductItemComponent } from '../components/catalogue/product-item/product-item.component';

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
    this.catalogueService.getProductsCatalogues().subscribe(
      data => {
        console.log("Données reçues :", data);
        this.products = data;
      },
      error => console.log("Erreur lors du chargement des produits :", error)
    );
        // this.products = this.catalogueService.produits;
  }  
}
