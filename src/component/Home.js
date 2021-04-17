import React from 'react'
import Header from "./Header"
import {useSelector} from "react-redux";
import CurrencyFormat from 'react-currency-format'; 
import {Link} from "react-router-dom"

const Home = () => {
    const {products}= useSelector(state => state.Product);
    return (
        <div>
        <Header />
       <div className="container mtb-30">
       <div className="row">
       {products.map(product =>(
           <div className="col-3" key={product.id}>
           <div className="products">
           <div className="product_img">
          <Link to={`/details/${product.id}`}> <img src= {`/Images/${product.image}`} alt="image name"  width="300" height="400"/>
          </Link>
           </div>
           <div className="product_name">
            {product.name}
           </div>
           <div className="row">
           <div className="col-6">
           <div className="product_price">
          <span className="actualPrice">  <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></span>
           </div>
           </div>
           <div className="col-6">
           <div className="product_discount_price">
            <CurrencyFormat value= {product.discountprice} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
           </div>
           </div>
           </div>
           </div>
           </div>
       ))}
       </div>
       </div>
        </div>
    )
}

export default Home
