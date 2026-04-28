
import { v4 as uuid } from 'uuid';

import type{ ICategory, IFormInput, IProduct } from '../interfaces';
export const productList: IProduct[]=[
    {
        id:uuid(),
        title:"Practical Granite Gloves",
        imageURL:"https://picsum.photos/seed/DPOZuT/640/480",
        description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality.",
        price:"587.00",
        colors:["purple", "brown", "green","red","orange"],
        category:{

            name:"Clothing",
            imageURL:"https://picsum.photos/seed/Clothing/640/480"
       }
    },
    {
        id:uuid(),
        title:"Recycled Plastic Chair",
        imageURL:"https://picsum.photos/seed/laGcKTSge/640/480",
        description:"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        price:"500.00",
        colors:["red", "blue", "green","yellow","orange"],
        category:{

            name:"Clothing",
            imageURL:"https://picsum.photos/seed/laGcKTSge/640/480"
       }
    },
    {   
        id:uuid(),
        title:"Small Rubber Soap",
        imageURL:"https://picsum.photos/seed/yidCgCS4/640/480",
        description:"The Football Is Good For Training And Recreational Purposes",    
        price:"500.00",
        colors:["red", "blue", "green","yellow","orange"],
        category:{

            name:"Clothing",
            imageURL:"https://picsum.photos/seed/laGcKTSge/640/480"
       }
    },
    {
        id:uuid(),   
        title:"Electronic Frozen Gloves",
        imageURL:"https://picsum.photos/seed/T6EIUh/640/480",
        description:"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price:"500.00",
        colors:["red", "blue", "green","yellow","orange"],
        category:{

            name:"Clothing",
            imageURL:"https://picsum.photos/seed/laGcKTSge/640/480"
       }
    },
]
export const formInputList:IFormInput[]=[
    {
        id:'title',
        name:"title",
        label:"Product Title",
        type:"text",
        placeholder:"Enter product title",
        required:true
    },{
        id:'description',
        name:"description",
        label:"Product Description",
        type:"text",
        placeholder:"Enter product description",
        required:true
    },
    {
        id:'image',
        name:"imageURL",
        label:"Product Image URL",
        type:"text",
        placeholder:"Enter product image URL",
        required:true
    },  
    {
        id:'price',
        name:"price",
        label:"Product Price",
        type:"number",
        placeholder:"Enter product price",
        required:true
    }
    // ,
    // {
    //     id:'category',
    //     name:"category",
    //     label:"Product Category",
    //     type:"text",
    //     placeholder:"Enter product category",
    //     required:true
    // }
    
]
export const colors:string[]=[
    "#a855f7", "#2563eb",
     "green",
     "yellow",
     "orange",
     "Gray",
     "Pink",
     "Indigo",
     "Purple",
     "Red",
      "black",
      "white",
      "brown",
      

]
export const categories: ICategory[] = [
    {
        id:uuid(),
        name:"Clothing",    
        imageURL:"https://picsum.photos/seed/Clothing/640/480"
    },
    {
        id:uuid(),
        name:"Electronics",
        imageURL:"https://picsum.photos/seed/Electronics/640/480"
    },{
        id:uuid(),
        name:"Furniture",
        imageURL:"https://picsum.photos/seed/Furniture/640/480"
    },{
        id:uuid(),
        name:"Toys",
        imageURL:"https://picsum.photos/seed/Toys/640/480"
    },{
        id:uuid(),
        name:"Books",
        imageURL:"https://picsum.photos/seed/Books/640/480"
    }
]
    