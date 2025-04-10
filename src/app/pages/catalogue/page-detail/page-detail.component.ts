import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../../../shared/services/impl/catalogue.service';
import { ProduitDetail } from '../../../shared/model/catalogue.model';
import { PanierService } from '../../../shared/services/impl/panier.service';
import { ProductItemComponent } from '../components/catalogue/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [ProductItemComponent, FormsModule],
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {


  produitDetail?: ProduitDetail;
  errorMessage: string = '';
  qteCom: number = 1;
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
      this.disabledButton = false;
    });
  }
  onValidateQte(qteCom: string): void {
    const parsedQte = Number(qteCom);

    if (!qteCom.trim()) {
      this.errorMessage = 'La quantité ne peut pas être vide';
    } else if (isNaN(parsedQte)) {
      this.errorMessage = 'La quantité doit être un nombre';
    } else if (parsedQte <= 0) {
      this.errorMessage = 'La quantité doit être supérieure à 0';
    } else if (parsedQte > this.produitDetail!.produit.quantiteStock) {
      this.errorMessage = 'La quantité doit être inférieure ou égale au stock';
    } else {
      this.errorMessage = '';
      this.qteCom = parsedQte;
    }
    this.disabledButton = !!this.errorMessage;
  }


  onIncrementQte(): void {
    if (this.qteCom < this.produitDetail!.produit.quantiteStock) {
      this.qteCom++;
      this.disabledButton = false;
    }
  }
  onDecrementQte(): void {
    if (this.qteCom > 1) {
      this.qteCom--;
      this.disabledButton = false;
    }
  }
  onAddPanier() {
    if (this.qteCom <= 0 || this.qteCom > this.produitDetail!.produit.quantiteStock || !!this.errorMessage) {
      this.errorMessage = 'Veuillez entrer une quantité valide.';
      return;
    }
    this.panierService.addProduct({
      ...this.produitDetail?.produit!,
      quantiteCom: this.qteCom
    });
  }
}