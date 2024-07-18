import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/products-model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  @Input() public product: IProduct = {} as IProduct;
}
