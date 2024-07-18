import { Routes } from '@angular/router';
import { ProductsCatalogPageComponent } from './products/components/products-catalog-page/products-catalog-page.component';
import { AboutsPageComponent } from './about/components/abouts-page/abouts-page.component';
import { ProductDetailsPageComponent } from './products/components/product-details-page/product-details-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsCatalogPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/product/:id',
        component: ProductDetailsPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutsPageComponent,
        pathMatch: 'full'
    }
];
