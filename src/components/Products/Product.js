import React, { useContext, useEffect, useState } from 'react';
import {useParams, useRouteMatch, useLocation} from 'react-router-dom';
import {BasketContext} from "../Products/BasketContext";
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../../App.css'

const Product = (props) => { 
    const [basket, setBasket] = useContext(BasketContext);
    const [ProductCount, setProductCount] = useState (0);
    const {id} = useParams();
    const [ProductItem, setProductItem] = useState([]);
    useEffect(() => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((result)=> setProductItem(result));
              
        },[]);
    const handleBuy = () => {

        setBasket(basket + ProductCount)
        console.log(basket)
    }   
    const HandleInc = () => {

        setProductCount(ProductCount + 1)
      } 
      const HandleDec = () => {
    
        setProductCount(ProductCount - 1)
      } 
    return (
            <div className='productlist'> 
            <h1>
                Product Detials: {ProductItem.id}            
            </h1>
            <div >
                <img src={ProductItem.image} alt="" height="200" />
            </div>
            <br />
            <div className="offset-3 col-md-6">
                <b>Product Name: </b>{ProductItem.title}
            </div>
            <div className="offset-3 col-md-6">
                <b>Price:</b> ${ProductItem.price}
            </div>
            <div className="offset-3 col-md-6">
                <b>Description : </b>{ProductItem.description}
            </div>
            <div className="offset-3 col-md-6">
                <b>category: </b>{ProductItem.category}
            </div>
            
            <div className="offset-3 col-md-6">              
            <button defaultValue="+" onClick={HandleInc} className="btn btn-success">+</button>
            <input type="text" value={ProductCount} readOnly className="col-3"   />
            <button  defaultValue="-" onClick={HandleDec} className="btn btn-danger">-</button>
            <button className="offset-1" onClick={handleBuy}>Add to Buy Basket</button>
            </div>
            <br />
            <div className="col-md-4">          
            <button>
            <Link to="/products">Return To Products Page</Link>
            </button>
                <h3>Count of Your Basket: {basket}</h3>
            </div>
        </div>

    )
}

export default Product
