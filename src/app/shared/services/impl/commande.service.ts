import { Injectable } from '@angular/core';
import { ICommandeService } from '../ICommandeService';
import { CommandeCatalogue, PanierCatalogue } from '../../model/catalogue.model';
import { AuthentificationMockService } from './authentification-mock.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientWithCommandePaginateDto, Commande, CommandesResponse } from '../../model/commande.model';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService implements ICommandeService {

  constructor(private authService: AuthentificationMockService, private panierService: PanierService, private httpClient: HttpClient) { }
  getCommandesClientConnected(page: number = 0, size: number = 5): Observable<CommandesResponse> {
    return this.httpClient.get<CommandesResponse>(`http://localhost:9090/api/commandes/client/${this.authService.currentUserSignal()?.id}?page=${page}&size=${size}`);
  }
  addCommande(): Observable<Commande> {
    let result: Observable<Commande> = this.httpClient.post<Commande>('http://localhost:9090/api/commandes/create', this.convertPanierToCommande(this.panierService.panierSignal()));
    this.panierService.clearPanier();
    return result;
  }
  convertPanierToCommande(panier: PanierCatalogue): CommandeCatalogue {
    return {
      clientId: this.authService.currentUserSignal()?.id!,
      date: new Date(),
      details: panier.produits.map(p => {
        return {
          prix: p.sold ? p.newPrice : p.oldPrice,
          produitId: p.id!,
          qte: p.quantiteCom!
        }
      }),
      montant: panier.totalPanierTTC
    };
  }
}
