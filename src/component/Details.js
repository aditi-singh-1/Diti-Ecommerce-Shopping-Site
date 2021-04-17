import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import CurrencyFormat from 'react-currency-format'; 
import { BsPlus, BsDash } from "react-icons/bs";

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.Product);
    useEffect(()=> {
     dispatch({type:'PRODUCT',id})
    },[id])
    const descQuantity= () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    return (
        <div className="container mt-100">
        <div className="row">
        <div className="col-5">
        <div className="details_img">
        <img src={`/images/${product.image}`} alt="" height="500" width="400"></img>
        </div>
        </div>
        <div className="col-4">
         <div className="details_name">
         {product.name}
         </div>
         <div className="details_prices">
        <span className="details_actual"> <CurrencyFormat value= {product.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} ></CurrencyFormat></span>
        <span className="details_discount"> <CurrencyFormat value= {product.discountprice} displayType={'text'} thousandSeparator={true} prefix={'₹'} ></CurrencyFormat></span>
         </div>
         <div className="details_info">
         <div className="details_indesc">
         <span className="dec" onClick={descQuantity}><BsDash /> </span>
         <span classname="quantity"> {quantity} </span>
         <span className="inc" onClick={() => setQuantity(quantity+1)}>< BsPlus/></span>
         </div>
         </div>
         <button className="add" onClick={()=> dispatch({type:'ADD', payload:{product,quantity}})}> Add To Cart </button>
         <div className="details_p">
         <h4>Description : </h4>
         {product.desc}
         </div>
        </div>
        </div>
            
        </div>
    )
}

export default Details
