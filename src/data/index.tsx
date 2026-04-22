
import { v4 as uuid } from 'uuid';

import type{ IProduct } from '../interfaces';
const productList: IProduct[]=[
    {
        id:uuid(),
        title:"Practical Granite Gloves",
        imgURL:"https://picsum.photos/seed/DPOZuT/640/480",
        description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality.",
        price:587.00,
        colors:["purple", "brown", "green","red","orange"],
        category:{

            name:"Clothing",
            imgURL:"https://picsum.photos/seed/Clothing/640/480"
       }
    },
    {
        id:uuid(),
        title:"Recycled Plastic Chair",
        imgURL:"https://picsum.photos/seed/laGcKTSge/640/480",
        description:"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        price:500.00,
        colors:["red", "blue", "green","yellow","orange"],
        category:{

            name:"Clothing",
            imgURL:"https://picsum.photos/seed/laGcKTSge/640/480"
       }
    },
    {   
        id:uuid(),
        title:"Small Rubber Soap",
        imgURL:"https://picsum.photos/seed/yidCgCS4/640/480",
        description:"The Football Is Good For Training And Recreational Purposes",    
        price:500.00,
        colors:["red", "blue", "green","yellow","orange"],
        category:{

            name:"Clothing",
            imgURL:"https://picsum.photos/seed/laGcKTSge/640/480"
       }
    },
    {
        id:uuid(),   
        title:"Electronic Frozen Gloves",
        imgURL:"https://picsum.photos/seed/T6EIUh/640/480",
        description:"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price:500.00,
        colors:["red", "blue", "green","yellow","orange"],
        category:{

            name:"Clothing",
            imgURL:"https://picsum.photos/seed/laGcKTSge/640/480"
       }
    },
]
export default productList;