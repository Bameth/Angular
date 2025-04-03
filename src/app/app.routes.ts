import { Routes } from '@angular/router';
import { PageCatalogueComponent } from './pages/catalogue/page-catalogue/page-catalogue.component';
import { PageDetailComponent } from './pages/catalogue/page-detail/page-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PanierCatalogueComponent } from './pages/catalogue/panier-catalogue/panier-catalogue.component';
import { LoginComponent } from './pages/security/login/login.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { SecurityComponent } from './pages/security/security.component';
import { AdminComponent } from './pages/admin/admin.component';
import path from 'path';
import { OrderComponent } from './pages/admin/order/order.component';
import { ClientsComponent } from './pages/admin/clients/clients.component';
import { ClientComponent } from './pages/catalogue/client/client.component';

export const routes: Routes = [
    {
        path: 'catalogue',
        component: CatalogueComponent,
        children: [
            {
                path: '',
                component: PageCatalogueComponent,
            },
            {
                path: 'detail/:product_id',
                component: PageDetailComponent,
            },
            {
                path: 'panier',
                component: PanierCatalogueComponent
            },
            {
                path: 'commandes',
                component: ClientComponent
            },

        ]
    },
    {
        path: 'security',
        component: SecurityComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
            path: 'commandes',
            component: OrderComponent
            },
            {
                path: 'clients',
                component: ClientsComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/catalogue',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];
