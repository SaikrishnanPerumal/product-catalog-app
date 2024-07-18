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

  public currentCategory: string = '';

  public constructor(private readonly productService: ProductService) {
    this.products = this.productService.products;
    this.filterAndSortProducts();
  }

  public filterAndSortProducts(): void {
    let tempProducts = this.productService.filterProducts(this.products, this.searchTerm, this.currentCategory);
    tempProducts = this.productService.sortProducts(tempProducts, this.sortOrder);

    this.filteredProducts = tempProducts;
  }

  public filterByCategory(category: string): void {
    if (this.currentCategory === category) {
      this.currentCategory = '';
      this.filterAndSortProducts();
      return;
    }
    this.currentCategory = category;
    this.filterAndSortProducts();
  }
}
