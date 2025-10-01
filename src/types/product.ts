export type ProductColor = "blue" | "pink" | "gray";

export type CardState =
  | "default"
  | "default-hover"
  | "selected"
  | "selected-hover"
  | "disabled";

export interface Product {
  id: string;
  taste: string;
  weight: number;
  portions: number;
  gifts: string[];
  description: string;
  color: ProductColor;
  available: boolean;
}

export interface ProductCardProps {
  product: Product;
}
