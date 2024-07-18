import { Routes } from '@angular/router';
import { ProductsCatalogPageComponent } from './products/components/products-catalog-page/products-catalog-page.component';
import { AboutsPageComponent } from './about/components/abouts-page/abouts-page.component';
import { ProductTileComponent } from './products/components/product-tile/product-tile.component';

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
        path: 'product-details',
        component: ProductTileComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutsPageComponent,
        pathMatch: 'full'
    }
];
