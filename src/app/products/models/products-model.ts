export enum ProductType {
    Mobile = 'mobile',
    Laptop = 'laptop',
    Headphones = 'headphones'
}

export interface IProduct {
    name: string;
    cost: number;
    type: ProductType;
    description: string;
    image?: string;
}