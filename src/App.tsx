


import ProductCard from './components/ProductCard'
import productList from './data'

function App() {
  // ** Render a list of ProductCard components
  const renderProductList = productList.map((product)=><ProductCard key={product.id} product={product} />)

  return (


    <div>
      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2 rounded-md'>
        
       
        {renderProductList}
      </div>
    </div>

  )
}

export default App
