import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../../../shared/services/impl/catalogue.service';
import { ProduitDetail } from '../../../shared/model/catalogue.model';
import { ProductItemComponent } from "../../../components/catalogue/product-item/product-item.component";
import { PanierService } from '../../../shared/services/impl/panier.service';
@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {


  produitDetail?: ProduitDetail;
  errorMessage: string = '';
  qteCom: number = 0;
  disabledButton: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private catalogueService: CatalogueService,
    private panierService: PanierService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['product_id'];
    console.log('Product ID:', id);
    this.catalogueService.getProductsDetailCatalogue(id).subscribe((data) => {
      this.produitDetail = data;
      console.log("Données reçues :", data);
    });
  }
  onValidateQte(qteCom: string): void {
    if (qteCom === '') {
      this.errorMessage = 'La quantité ne peut pas être vide';
    } else if (isNaN(Number(qteCom))) {
      this.errorMessage = 'La quantité doit être un nombre';
    } else if (Number(qteCom) <= 0) {
      this.errorMessage = 'La quantité doit être supérieure à 0';
    } else if (Number(qteCom) > this.produitDetail!.produit.quantiteStock) {
      this.errorMessage = 'La quantité doit être inférieure ou égale au stock';
    } else {
      this.errorMessage = '';
      this.qteCom = Number(qteCom);
      this.disabledButton = false;
    }
  }
  onAddPanier() {
    // alert('onAddPanier');
    this.panierService.addProduct({
      ...this.produitDetail?.produit!,
      quantiteCom: this.qteCom
    });
  }
}