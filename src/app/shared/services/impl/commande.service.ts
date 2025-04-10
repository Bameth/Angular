import { Injectable } from '@angular/core';
import { ICommandeService } from '../ICommandeService';
import { CommandeCatalogue, PanierCatalogue } from '../../model/catalogue.model';
import { AuthentificationMockService } from './authentification-mock.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientWithCommandePaginateDto, Commande, CommandesResponse } from '../../model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService implements ICommandeService {

  constructor(private authService: AuthentificationMockService, private httpClient: HttpClient) { }
  getCommandesClientConnected(): Observable<CommandesResponse> {
    return this.httpClient.get<CommandesResponse>(`http://localhost:9090/api/commandes/client/${this.authService.currentUserSignal()?.id}`);
  }
  addCommande(panier: PanierCatalogue): Observable<Commande> {
    return this.httpClient.post<Commande>('http://localhost:9090/api/commandes/create', panier);
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
