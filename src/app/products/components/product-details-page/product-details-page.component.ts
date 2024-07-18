import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/products-model';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss'
})
export class ProductDetailsPageComponent {
  public productId: string;
  public product: IProduct;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id')!;

    this.product = this.productsService.getProductById(this.productId)!;
  }
}
