// import React, { useState } from 'react'
import './search.css'
//import ProductCard from '../ProductCard/ProductCard';
import { useDispatch,useSelector } from 'react-redux'
import { setSearchTerm } from '../../store/productSlice'
function Search() {

  
  // const [searchTerm,setSearchTerm]=useState('')
  const dispatch=useDispatch()
  const searchTerm=useSelector((state)=>state.products.searchTerm)
  //  const [filteredProducts,setFilteredProducts]=useState(products);
    
   const handleInputChange=(e)=>{
  
    dispatch(setSearchTerm(e.target.value))
   }
  // //  const handleSearchClick=()=>{
  // //   const filtered=products.filter(product=>
  // //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
     
  // //   );
  //   setFilteredProducts(filtered);
  //  }
  return (
   <>
   <div className='search_bar'>
    <input  id="search_in" type='text' value={searchTerm} onChange={handleInputChange} placeholder='Search Perfumes'></input>
   {/* <button  id="search_btn" type='button' onClick={}>Search</button> */}
   </div>

   
   </>
   
  )
  
}

export default Search
