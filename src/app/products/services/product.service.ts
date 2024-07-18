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

    public getProductById(id: string): IProduct | undefined {
        return this.products.find(product => product.id === id);
    }

    public sortProducts(products: IProduct[], sortOrder: string): IProduct[] {
        if (sortOrder === 'name') {
            products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'price') {
            products.sort((a, b) => a.price - b.price);
        }
        return products;
    }

    public filterProducts(products: IProduct[], searchTerm: string, category: string): IProduct[] {
        let tempProducts = products.filter(product => {
            const searchInclusion = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryInclusion = category === '' || product.type === category;
            return searchInclusion && categoryInclusion;
        });
        return tempProducts
    }
}