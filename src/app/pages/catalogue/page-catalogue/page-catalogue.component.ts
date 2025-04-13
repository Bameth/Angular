import { Component, inject, OnInit } from '@angular/core';
import { CatalogueService } from '../../../shared/services/impl/catalogue.service';
import { ProduitCatalogue } from '../../../shared/model/catalogue.model';
import { ProductItemComponent } from '../components/catalogue/product-item/product-item.component';
import { RestResponseModel } from '../../../shared/model/rest-response.model';

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
  response?: RestResponseModel<ProduitCatalogue[]>;
  ngOnInit(): void {
    this.catalogueService.getAllWithPagination().subscribe(
      {
        next: data => this.response = data,
        error: (err) => console.log(err),
      }
    )
    // this.products = this.catalogueService.produits;
  }
}
