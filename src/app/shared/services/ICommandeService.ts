import { Observable } from "rxjs";
import { CommandeCatalogue, PanierCatalogue } from "../model/catalogue.model";
import { ClientWithCommandePaginateDto, Commande, CommandesResponse } from "../model/commande.model";

export interface ICommandeService {
    addCommande(commande: PanierCatalogue): Observable<Commande>;
    convertPanierToCommande(panier: PanierCatalogue): CommandeCatalogue;
    getCommandesClientConnected(): Observable<CommandesResponse>;
}