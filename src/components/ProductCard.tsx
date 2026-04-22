// import type { ReactNode } from "react"
import type { IProduct } from "../interfaces"
import { textSlicer } from "../utils/functions";
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
product:IProduct;

}

const ProductCard = ({product}: IProps) => {
    const {title, description, price, imgURL, colors, category} = product
    return (
        <div className="border m-5 p-3 rounded-md w-80  ">
            <Image className="rounded-md mb-2" urlImage={imgURL} altText={title} />
            <h1 className="text-xl " >{title}</h1>
            <p className="text-gray-400">{textSlicer(description)}</p>
            <div className="flex gap-2 my-1.5">
                
                <div className="w-5 h-5 rounded-full bg-red-500 cursor-pointer "></div>
                <div className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer"></div>
                <div className="w-5 h-5 rounded-full bg-green-500 cursor-pointer"></div>
            </div>
            <div className="flex items-center justify-between">
                <span>${price}</span>
                <Image className="w-10 h-10 rounded-full object-center" urlImage={imgURL} altText={title} />
            </div>
            <div className="flex items-center justify-between space-x-2 mt-3">
                <Button className="bg-purple-500" width="w-full" onClick={() => {console.log("Edit clicked")}}>Edit</Button>
                <Button className="bg-red-500 " width="w-full" onClick={() => {console.log("Delete clicked")}}>Delete</Button>
                <Button className="bg-green-500 " width="w-full" onClick={() => {console.log("Success clicked")}}>Success</Button>
                <Button className="bg-gray-500 " width="w-full" onClick={() => {console.log("Cancel clicked")}}>Cancel</Button>
                
            </div>
            

        </div>
    )
}

export default ProductCard 