export interface Product {
        _id?: string;
        name: string;
        description: string;
        price: number;
        category: string;
        ingredients: {
            name: string;
            icon: string;
        }[];
        imagePath: string;
}
