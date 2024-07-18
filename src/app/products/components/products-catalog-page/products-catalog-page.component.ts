import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/products-model';
import { ProductTileComponent } from "../product-tile/product-tile.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-catalog-page',
  standalone: true,
  imports: [ProductTileComponent, FormsModule, CommonModule],
  templateUrl: './products-catalog-page.component.html',
  styleUrl: './products-catalog-page.component.scss'
})
export class ProductsCatalogPageComponent {
  public products: IProduct[];
  public filteredProducts: IProduct[] = [];
  public searchTerm: string = '';
  public sortOrder: string = 'name';

  public constructor(private readonly productService: ProductService) {
    this.products = this.productService.products;
    this.filterAndSortProducts();
    console.log(this.productService.products);
  }

  public filterAndSortProducts(): void {
    let tempProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortOrder === 'name') {
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOrder === 'price') {
      tempProducts.sort((a, b) => a.cost - b.cost);
    }
    console.log({ tempProducts });

    this.filteredProducts = tempProducts;
  }
}
