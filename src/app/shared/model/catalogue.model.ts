export interface ProduitCatalogue {
    id: number;
    name: string;
    miniDescription: string;
    image: string;
    description?: string;
    oldPrice: number;
    newPrice: number;
    sold: boolean;
    notation: number;
}
export interface ProduitDetail{
    produit : ProduitCatalogue;
    relatedProducts : ProduitCatalogue[]
}