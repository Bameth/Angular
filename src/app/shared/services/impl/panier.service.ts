import { Injectable, signal } from '@angular/core';
import { IPanierCatalogue } from '../IPanierCatalogue';
import { PanierCatalogue, ProduitCatalogue } from '../../model/catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService implements IPanierCatalogue {
  panierSignal = signal<PanierCatalogue>(this.initialiserPanier());
  constructor() { }
  addProduct(produit: ProduitCatalogue): void {
    let prix: number = produit.sold ? produit.newPrice : produit.oldPrice;
    let montant: number = produit.quantiteCom! * prix;
    this.panierSignal.update(panier => ({
      ...panier,
      produits: [...panier.produits, produit],
      totalPanierHT: panier.totalPanierHT + montant,
      totalPanierTTC: (panier.totalPanierHT + montant) * (1 + panier.totalTVA),
    }))
  }
  deleteProduct(produit: ProduitCatalogue): void {
    throw new Error('Method not implemented.');
  }
  clearPanier(): void {
    this.panierSignal.set(this.initialiserPanier());
  }
  private initialiserPanier(): PanierCatalogue {
    return {
      produits: [],
      totalPanierHT: 0,
      totalPanierTTC: 0,
      totalTVA: 0.18,
      date: new Date
    }
  }
}
