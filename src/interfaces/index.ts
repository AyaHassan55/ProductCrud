export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string | number;
  imgURL?: string;
  colors: string[];
  category: {
    name: string;
    imgURL: string;
  }
}