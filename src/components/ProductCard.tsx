// import type { ReactNode } from "react"

import type { IProduct } from "../interfaces"
import { textSlicer } from "../utils/functions";
import Image from "./Image"
import Button from "./ui/Button"
import CircleColor from "./ui/CircleColor";

interface IProps {
product:IProduct;
setProductToEdit?:(product:IProduct)=>void;
openEditModal:()=>void;
index:number;
setProductToEditIndex:(index:number)=>void;

}

const ProductCard = ({product, setProductToEdit, openEditModal, index, setProductToEditIndex}: IProps) => {
    const {title, description, price, imageURL,colors,category} = product
   
// -------------------RENDER COLORS----------------------
    const renderProductColors = colors.map(color => <CircleColor key={color} color={color}
  />)
  // -------------Handler for edit ----------------

    const handleEdit = () => {
        openEditModal()
        setProductToEdit && setProductToEdit(product)
        setProductToEditIndex(index)
    }
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0  m-5 p-2  md:p-4 rounded-md w-80 flex flex-col ">
            <Image className="rounded-md mb-2 h-52 w-full lg:object-cover" urlImage={imageURL} altText={title} />
            <h1 className="text-xl " >{title}</h1>
            <p className="text-gray-400">{textSlicer(description)}</p>
            <div className="flex gap-2 my-1.5 flex-wrap space-x-1">
            {renderProductColors}
          </div>

            <div className="flex items-center justify-between">
                <span>${price}</span>
                <Image className="w-10 h-10 rounded-full object-center" urlImage={category.imageURL} altText={category.name} />
            </div>
            <div className="flex items-center justify-between space-x-2 mt-3">
                <Button className="bg-purple-500 cursor-pointer" width="w-full" onClick={() => handleEdit()}>Edit</Button>
                <Button className="bg-red-500  cursor-pointer" width="w-full" onClick={() => {console.log("Delete clicked")}}>Delete</Button>
                
                
            </div>
            

        </div>
    )
}

export default ProductCard 