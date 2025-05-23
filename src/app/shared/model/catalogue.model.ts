export interface ProduitCatalogue {
    id: number;
    name: string;
    miniDescription: string;
    image: string;
    description?: string;
    oldPrice: number;
    quantiteStock: number;
    newPrice: number;
    quantiteCom?: number;
    sold: boolean;
    notation: number;
}
export interface ProduitDetail {
    produit: ProduitCatalogue;
    relatedProducts: ProduitCatalogue[]
}

export interface PanierCatalogue {
    produits: ProduitCatalogue[];
    totalPanierHT: number;
    totalPanierTTC: number;
    totalTVA: number;
    date: Date;
}

export interface CommandeCatalogue {
    montant: number;
    date: Date;
    clientId: number;
    details: ProduitPanierCatalogue[];
}

export interface ProduitPanierCatalogue {
    qte: number;
    prix: number;
    produitId: number;
}