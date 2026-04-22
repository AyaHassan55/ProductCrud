// import type { ReactNode } from "react"
import Image from "./Image"
interface IProps {

    // img:ReactNode;
    // title:string;
    // description:string;
    // colorOptions:ReactNode;

}

const ProductCard = ({}: IProps) => {
    return (
        <div className="border m-5 p-3 rounded-md w-80 flex flex-col ">
            <Image className="rounded-md m-3" urlImage="https://picsum.photos/seed/Emw9ZivsRn/640/480" altText="Product Image" />
            <h1 className="text-xl " >Product Title</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <div className="flex gap-2 my-1.5">
                <div className="w-5 h-5 rounded-full bg-red-500 cursor-pointer "></div>
                <div className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer"></div>
                <div className="w-5 h-5 rounded-full bg-green-500 cursor-pointer"></div>
            </div>
            <div className="flex items-center justify-between">
                <span>$500.00</span>
                <Image className="w-10 h-10 rounded-full object-center" urlImage="https://picsum.photos/seed/Emw9ZivsRn/640/480" altText="Product Image" />
            </div>
            <div className="flex items-center justify-between space-x-2 m-3">
                <button className="bg-purple-500 text-white px-3 py-1 rounded-md w-full">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md w-full">Delete</button>
            </div>
            

        </div>
    )
}

export default ProductCard 