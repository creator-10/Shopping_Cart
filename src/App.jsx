
import './App.css'
import Header from './components/Header/header'
import Search from './components/Search_Bar/search'
import Productcard from './components/ProductCards/productCard'
import Cart from './components/Cart/cart.jsx'
import { Route, Routes } from 'react-router'

function App() {
 

  return (
    <>
     <Header></Header>
     <main>
      <Routes>
        <Route path="/" element={
          <>
           <Search></Search>
           <Productcard></Productcard>
           
          </>
        }
        />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </main>
    
    
    </>
  )
}

export default App
