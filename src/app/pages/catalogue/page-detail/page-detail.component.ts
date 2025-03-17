import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../../../shared/services/impl/catalogue.service';
import { ProduitDetail } from '../../../shared/model/catalogue.model';
import { ProductItemComponent } from "../../../components/catalogue/product-item/product-item.component";
@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  produitDetail?: ProduitDetail;
  errorMessage?: string;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private catalogueService: CatalogueService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['product_id'];
    console.log('Product ID:', id);
    this.catalogueService.getProductsDetailCatalogue(id).subscribe((data) => {
      this.produitDetail = data;
      console.log("Données reçues :", data);
    });
  }
  onValidateQte(): void {
    if (!this.quantity || this.quantity < 1) {
      this.quantity = 1;
      this.errorMessage = "La quantité minimum est 1";
    } else if (this.quantity > 10) {
      this.quantity = 10;
      this.errorMessage = "Quantité maximum atteinte (10)";
    } else {
      this.errorMessage = undefined;
    }
  }
}