import { Component, OnInit } from '@angular/core';
import { AuthentificationMockService } from '../../../shared/services/impl/authentification-mock.service';
import { CommandeService } from '../../../shared/services/impl/commande.service';
import { ClientWithCommandePaginateDto, CommandesResponse } from '../../../shared/model/commande.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-client',
  imports: [CommonModule, PaginationComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  nextPage() {
    if (this.clientWithCommandes?.currentPage !== undefined && this.clientWithCommandes?.currentPage < this.clientWithCommandes?.totalPages - 1) {
      this.refresh(this.clientWithCommandes.currentPage + 1);
    }
  }
  get pageList(): number[] {
    if (!this.clientWithCommandes) return [];
    return Array.from({ length: this.clientWithCommandes.totalPages }, (_, i) => i);
  }

  previousPage() {
    if (this.clientWithCommandes?.currentPage !== undefined && this.clientWithCommandes?.currentPage > 0) {
      this.refresh(this.clientWithCommandes.currentPage - 1);
    }
  }


  clientWithCommandes: CommandesResponse | null = null;
  constructor(public authService: AuthentificationMockService, private router: Router, private commandeService: CommandeService) { }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.refresh();
    }
    else {
      this.router.navigateByUrl('/security/login');
    }
  }
  onPaginate(page: number): void {
    this.refresh(page);
  }
  private refresh(page: number = 0): void {
    this.commandeService.getCommandesClientConnected(page).subscribe({
      next: (data) => {
        this.clientWithCommandes = data;
        console.log(this.clientWithCommandes);
      },
      error: (error) => {
        console.error('Error fetching client with commandes:', error);
      }
    });
  }
}
