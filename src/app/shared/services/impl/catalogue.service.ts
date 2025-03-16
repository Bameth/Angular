import { Injectable } from '@angular/core';
import { ProduitCatalogue } from '../../model/catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  produits: ProduitCatalogue[] = [
    {
      id: 1,
      nom: "Chaussure Nike",
      miniDescription: "Chaussure de sport",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Chaussure de sport pour homme",
      oldPrice: 100,
      newPrice: 50,
      sold: false,
      notation: 4.5
    },
    {
      id: 2,
      nom: "Chaussure Adidas",
      miniDescription: "Chaussure de sport",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Chaussure de sport pour homme",
      oldPrice: 100,
      newPrice: 50,
      sold: false,
      notation: 4.5
    },
    {
      id: 3,
      nom: "Chaussure Puma",
      miniDescription: "Chaussure de sport",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Chaussure de sport pour homme",
      oldPrice: 100,
      newPrice: 50,
      sold: false,
      notation: 4.5
    },
    {
      id: 4,
      nom: "Chaussure Reebok",
      miniDescription: "Chaussure de sport",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Chaussure de sport pour homme",
      oldPrice: 100,
      newPrice: 50,
      sold: false,
      notation: 4.5
    }
  ];
  constructor() { }
}
