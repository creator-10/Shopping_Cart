
import React from 'react'
import './productCard.css'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../../Slice/cartSlice'



function ProductCard() {
    const dispatch=useDispatch()
   const products=useSelector((state)=>state.products.products)
   const searchTerm=useSelector(state=>state.products.searchTerm)
   const filtered=products.filter(product=>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
   )
   const displayList=searchTerm==='' ? products:filtered

   const handleAdd=item=>{
    console.log("Adding to cart:", item)
    dispatch(addToCart(item))
   }
  return (
   <>
    <section className="product-cards">
        {displayList.map((item)=>(
        <div className="perfume" key={item.id}>
        <div className="perfume-img" >
                <img src={item.image}/>
                <p>{item.name}</p>
            </div>
            <div className="perfume-features">
                <h1>${item.price.toFixed(2)}</h1>
                <button onClick={()=>handleAdd(item)}>AddToCart</button>
                
            </div>
            
            </div>
        ))}
        {displayList.length===0 && searchTerm!=='' && (
            <p className='no-results'>No perfumes found for "{searchTerm}"</p>
        )}
            </section>
          
   </>
  )
}

export default ProductCard
