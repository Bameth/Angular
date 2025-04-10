export interface Commande {
    id: number;
    montant: number;
    date: Date;
}

export interface ClientSampleDto {
    firstName: string;
    lastName: string;
    phone: string;
}


export interface ClientWithCommandePaginateDto {
    client: ClientSampleDto;
    commandes: Commande[];
}

export interface CommandesResponse {
    results: ClientWithCommandePaginateDto;
    totalItems: number;
    pages: number;
    last: boolean;
    totalPages: number;
    currentPage: number;
    first: boolean;
    status: number;
}
