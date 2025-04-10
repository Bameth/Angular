import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationMockService } from '../../../shared/services/impl/authentification-mock.service';
import { LoginResponse } from '../../../shared/model/user.model';
import { PanierService } from '../../../shared/services/impl/panier.service';
import { CommandeService } from '../../../shared/services/impl/commande.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private queryParams: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  onLogin() {
    if (this.formLogin.invalid) {
      return;
    }

    this.isLoading = true;

    const { login, password } = this.formLogin.value;
    this.authService.login(login, password).subscribe({
      next: (response: LoginResponse) => {
        if (response?.success) {
          const role = response.data?.role;

          if (role === 'client') {
            const query = this.route.snapshot.queryParams['link'];
            if (query === "panier") {
              this.router.navigateByUrl('/catalogue/commandes');
              this.commandeService.addCommande(this.panierService.panierSignal())
            } else {
              this.router.navigateByUrl('/catalogue');
            }
          } else if (role === 'admin') {
            this.router.navigateByUrl('/admin/dashboard');
          }
        } else {
          this.errorMessage = response.message || 'Login ou mot de passe incorrect';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Problème de serveur';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  formLogin: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  formLogin2: FormGroup;
  constructor(private builder: FormBuilder,
    private route: ActivatedRoute,
    private panierService: PanierService,
    private commandeService: CommandeService,
    private authService: AuthentificationMockService,
    private router: Router
  ) {
    this.formLogin2 = this.builder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      //add commande
      this.router.navigateByUrl('/catalogue');
      // redirection vers page mes commandes
    }
  }
}
