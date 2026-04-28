export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string ;
  imageURL: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  }
}
export interface IFormInput {
  id: string;
  name: "title"|"description"|"price"|"imageURL";
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}
export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}