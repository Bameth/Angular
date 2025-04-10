import { Component, OnInit } from '@angular/core';
import { AuthentificationMockService } from '../../../shared/services/impl/authentification-mock.service';
import { CommandeService } from '../../../shared/services/impl/commande.service';
import { ClientWithCommandePaginateDto } from '../../../shared/model/commande.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientWithCommandes: ClientWithCommandePaginateDto | null = null;
  constructor(public authService: AuthentificationMockService, private router: Router, private commandeService: CommandeService) { }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.commandeService.getCommandesClientConnected()
        .subscribe({
          next: (data) => {
            this.clientWithCommandes = data.results;
            console.log(this.clientWithCommandes);
          },
          error: (error) => {
            console.error('Error fetching client with commandes:', error);
          }
        });
    }
    else {
      this.router.navigateByUrl('/security/login');
    }
  }

}
