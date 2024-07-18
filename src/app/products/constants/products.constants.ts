import { IProduct, ProductType } from "../models/products-model";

export const sampleProducts: IProduct[] = [
    { name: 'Galaxy S24', cost: 80000, type: ProductType.Mobile , description: 'Mobile'},
    { name: 'IPhone 15', cost: 82000, type: ProductType.Mobile , description: 'Mobile'},
    { name: 'Pixel 8', cost: 78000, type: ProductType.Mobile , description: 'Mobile'},
    { name: 'Zenbook A16', cost: 90000, type: ProductType.Laptop , description: 'Laptop'},
    { name: 'ThinkPad X30', cost:79200, type: ProductType.Laptop , description: 'Laptop'},
    { name: 'Modern 16', cost: 82000, type: ProductType.Laptop , description: 'Laptop'},
    { name: 'Sony XM5', cost: 22000, type: ProductType.Headphones , description: 'Headphones'},
    { name: 'Schneider H2', cost: 18000, type: ProductType.Headphones , description: 'Headphones'},
    { name: 'JBL A16', cost: 17300, type: ProductType.Headphones , description: 'Headphones'},
]