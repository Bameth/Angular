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
      produits: this.updateProductList(panier.produits, produit),
      totalPanierHT: panier.totalPanierHT + montant,
      totalPanierTTC: (panier.totalPanierHT + montant) * (1 + panier.totalTVA),
    }))
  }
  deleteProduct(produit: ProduitCatalogue): void {
    let prix: number = produit.sold ? produit.newPrice : produit.oldPrice;
    let montant: number = produit.quantiteCom! * prix;

    let produitsRestants = this.panierSignal().produits.filter(produitItem => produitItem.id !== produit.id);

    this.panierSignal.update(panier => ({
      ...panier,
      produits: produitsRestants,
      totalPanierHT: produitsRestants.length > 0 ? Math.max(0, Math.round((panier.totalPanierHT - montant) * 100) / 100) : 0,
      totalPanierTTC: produitsRestants.length > 0 ? Math.max(0, Math.round((panier.totalPanierHT - montant) * (1 + panier.totalTVA) * 100) / 100) : 0,
    }));
  }
  clearPanier(): void {
    this.panierSignal.set(this.initialiserPanier());
  }
  incrementProduct(produit: ProduitCatalogue): void {
    this.panierSignal.update(panier => {
      let produitsMaj = panier.produits.map(item => {
        if (item.id === produit.id) {
          return { ...item, quantiteCom: item.quantiteCom! + 1 };
        }
        return item;
      });

      let nouveauTotalHT = produitsMaj.reduce((total, item) => {
        let prix = item.sold ? item.newPrice : item.oldPrice;
        return total + (item.quantiteCom! * prix);
      }, 0);

      return {
        ...panier,
        produits: produitsMaj,
        totalPanierHT: Math.round(nouveauTotalHT * 100) / 100,
        totalPanierTTC: Math.round(nouveauTotalHT * (1 + panier.totalTVA) * 100) / 100,
      };
    });
  }

  decrementProduct(produit: ProduitCatalogue): void {
    this.panierSignal.update(panier => {
      let produitsMaj = panier.produits
        .map(item => {
          if (item.id === produit.id) {
            let nouvelleQuantite = Math.max(0, item.quantiteCom! - 1);
            return nouvelleQuantite > 0 ? { ...item, quantiteCom: nouvelleQuantite } : null;
          }
          return item;
        })
        .filter(item => item !== null) as ProduitCatalogue[];

      let nouveauTotalHT = produitsMaj.reduce((total, item) => {
        let prix = item.sold ? item.newPrice : item.oldPrice;
        return total + (item.quantiteCom! * prix);
      }, 0);

      return {
        ...panier,
        produits: produitsMaj,
        totalPanierHT: Math.round(nouveauTotalHT * 100) / 100,
        totalPanierTTC: Math.round(nouveauTotalHT * (1 + panier.totalTVA) * 100) / 100,
      };
    });
  }


  private updateProductList(produitsList: ProduitCatalogue[], newProduit: ProduitCatalogue): ProduitCatalogue[] {
    let index: number = produitsList.findIndex(produit => newProduit.id === produit.id);
    if (index >= 0) {
      produitsList[index].quantiteCom! += newProduit.quantiteCom!;
    }
    else {
      produitsList.push(newProduit);
    }
    return [...produitsList];
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
