import { Observable } from "rxjs";
import { CommandeCatalogue, PanierCatalogue } from "../model/catalogue.model";
import { ClientWithCommandePaginateDto, Commande, CommandesResponse } from "../model/commande.model";

export interface ICommandeService {
    addCommande(): Observable<Commande>;
    convertPanierToCommande(panier: PanierCatalogue): CommandeCatalogue;
    getCommandesClientConnected(page: number, size: number): Observable<CommandesResponse>;
}