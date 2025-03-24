import { ProduitCatalogue } from "../model/catalogue.model";

export interface IPanierCatalogue {
    addProduct(produit: ProduitCatalogue): void;
    deleteProduct(produit: ProduitCatalogue): void;
    clearPanier(): void;
}