import { Routes } from '@angular/router';
import { PageCatalogueComponent } from './pages/catalogue/page-catalogue/page-catalogue.component';
import { PageDetailComponent } from './pages/catalogue/page-detail/page-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'catalogue',
        component: PageCatalogueComponent,
    },
    {
        path: 'catalogue/detail/:product_id',
        component: PageDetailComponent,
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
