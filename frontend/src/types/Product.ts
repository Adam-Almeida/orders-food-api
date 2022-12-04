export interface Product {
        _id?: string;
        name: string;
        description?: string;
        price: string;
        category: string;
        ingredients?: {
            name: string;
            icon: string;
        }[];
        imagePath?: string;
}
