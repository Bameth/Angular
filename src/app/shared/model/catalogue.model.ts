export interface ProduitCatalogue {
    id: number;
    nom: string;
    miniDescription: string;
    image: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    sold: boolean;
    notation: number;
}