import { IProduct, ProductType } from "../models/products-model";

export const sampleProducts: IProduct[] = [
    { id: '1', name: 'Galaxy S24', price: 80000, type: ProductType.Mobile , description: 'Mobile', image: 'assets/images/Mobile.svg'},
    { id: '2', name: 'IPhone 15', price: 82000, type: ProductType.Mobile , description: 'Mobile', image: 'assets/images/Mobile.svg'},
    { id: '3', name: 'Pixel 8', price: 78000, type: ProductType.Mobile , description: 'Mobile', image: 'assets/images/Mobile.svg'},
    { id: '4', name: 'Zen-book A16', price: 90000, type: ProductType.Laptop , description: 'Laptop', image: 'assets/images/Laptop.svg'},
    { id: '5', name: 'ThinkPad X30', price:79200, type: ProductType.Laptop , description: 'Laptop', image: 'assets/images/Laptop.svg'},
    { id: '6', name: 'Modern 16', price: 82000, type: ProductType.Laptop , description: 'Laptop', image: 'assets/images/Laptop.svg'},
    { id: '7', name: 'Sony XM5', price: 22000, type: ProductType.Headphone , description: 'Headphone', image: 'assets/images/Headphone.svg'},
    { id: '8', name: 'Schneider H2', price: 18000, type: ProductType.Headphone , description: 'Headphone', image: 'assets/images/Headphone.svg'},
    { id: '9', name: 'JBL A16', price: 17300, type: ProductType.Headphone , description: 'Headphone', image: 'assets/images/Headphone.svg'},
]