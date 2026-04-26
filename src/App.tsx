



import Button from './components/ui/Button'
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal'
import productList from './data'
import { useState } from 'react'
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

  return (


    <main className='container mx-auto '>
      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 rounded-md'>


        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={close} title="My Modal Title"
        children={
          <div className='flex justify-between items-center gap-4'>
            <Button className="bg-purple-500" width="w-full" onClick={open}>Submit</Button>
            <Button className="bg-red-500" width="w-full" onClick={open}>Cancel</Button>
          </div>


        }
      />
    </main >

  )
}

export default App
