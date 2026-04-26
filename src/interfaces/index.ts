export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string | number;
  imgURL?: string;
  // colors: string[];
  // category: {
  //   name: string;
  //   imgURL: string;
  // }
}
export interface IFormInput {
  id: string;
  name: "title"|"description"|"price"|"imgURL";
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}