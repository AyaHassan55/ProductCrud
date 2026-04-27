



import Button from './components/ui/Button'
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { colors, formInputList, productList } from './data'
import Input from './components/ui/input'
import type { IProduct } from './interfaces'
import { validateProduct } from './validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColor from './components/ui/CircleColor'

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
    colors: [],

    category: {
      name: "",
      imageURL: ""
    }
  }
  // ------------------State --------------------------
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [error, setError] = useState(
    {
      title: "",
      description: "",
      price: "",
      imageURL: "",
    })
  console.log("errors====", error)
  // ------------------Handler --------------------------
  const open = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
    setError({ ...error, [name]: "" })
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // const { title, description, price, imageURL } = product
    const errors = validateProduct({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: (product.imageURL as string),
    });
    // console.log("error messages", errors)
    //--------------------------- check if any propertty has a value of "" in the errors object, if yes then return from the function and do not submit the form
    const hasError = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "")
    console.log(hasError)
    if (!hasError) {
      setError(errors)


    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }

  };
  const onCancel = () => {
    console.log("Cancel clicked");
    setProduct(defaultProductObj)
    closeModal()
  }

  // ** ------------------Render a list of ProductCard components----------------------------------
  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputList.map((input) =>
    <div className='flex flex-col gap-1' key={input.id}>
      <label
        htmlFor={input.id}
        className='text-sm font-medium text-gray-700'>{input.label}</label>
      <Input

        key={input.id} id={input.id} type={input.type} name={input.name} value={product[input.name]}
        placeholder={input.placeholder} required={input.required}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={error[input.name]} />
    </div>
  )
  const renderProductColors = colors.map(color => <CircleColor key={color}  color={color}/>)

  return (


    <main className='container mx-auto '>
      <Button className="bg-purple-500 mt-2 cursor-pointer" onClick={open}>Open Modal</Button>
      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 rounded-md'>


        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="My Modal Title">
        <form className='space-y-2' onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex gap-2 my-1.5 flex-wrap space-x-1">
            {renderProductColors}
          </div>

          <div className='flex justify-between items-center space-x-2 mt-4'>
            <Button className="bg-purple-500" width="w-full" onClick={open}>Submit</Button>
            <Button className="bg-red-500" width="w-full" onClick={onCancel}>Cancel</Button>
          </div>
        </form>

      </Modal>


    </main >

  )
}

export default App
