export enum ProductType {
    Mobile = 'mobile',
    Laptop = 'laptop',
    Headphone = 'headphone'
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    type: ProductType;
    description: string;
    image?: string;
}