import { Injectable } from "@angular/core";
import { IProduct } from "../models/products-model";
import { sampleProducts } from "../constants/products.constants";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    public products: IProduct[];

    public constructor() {
        this.products = sampleProducts;
    }
}