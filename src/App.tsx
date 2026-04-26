



import Button from './components/ui/Button'
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal'

import { useState } from 'react'
import { formInputList, productList } from './data'
import Input from './components/ui/input'

const App = () => {
  // -- State for Modal
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  // ** Render a list of ProductCard components
  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputList.map((input) =>
     <div className='flex flex-col gap-1'>
      <label 
            htmlFor={input.id} 
            className='text-sm font-medium text-gray-700'>{input.label}</label>
       <Input key={input.id} id={input.id} type={input.type} name={input.name}
     
       />
     </div>
    )

  return (


    <main className='container mx-auto '>
      <Button className="bg-purple-500 mt-2 cursor-pointer" onClick={open}>Open Modal</Button>
      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 rounded-md'>


        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="My Modal Title">
        <div className='space-y-2'>
{renderFormInputList}
         <div className='flex justify-between items-center space-x-2 mt-4'>
            <Button className="bg-purple-500" width="w-full" onClick={open}>Submit</Button>
            <Button className="bg-red-500" width="w-full" onClick={open}>Cancel</Button>
          </div>
        </div>
        
      </Modal>
        
    
    </main >

  )
}

export default App
