import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/products-model';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  @Input() public product: IProduct = {} as IProduct;
}
