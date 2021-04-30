import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Product from "./Product"
import  '../../App.css'
import { AuthContext } from "../../App";

export default function ProductsList(props)  {
    const [Products, setProducts] = useState({
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0
      
  });

    const [Pager, setPager] = useState(0)

   const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * Products.perPage;

    setProducts({
        ...Products,
        currentPage: selectedPage,
        offset: offset,
        
    })
    setPager(selectedPage);
};

    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((res) => {
            
            const data = res.data;
            const slice = data.slice(Products.offset, Products.offset + Products.perPage)
            const postData = slice.map((pd,index) => (
                

                      <tr  key={index}>
                            <td className="image"> 
                              <img src={pd.image} alt="" height="200" /> 
                            </td>
                            <td className="info"> 
                            {pd.title} 
                         <br /> 
                         {/* <Product id={pd.id} items={pd} />   */}
                          {/* <td className="col-md-3">  */}
                         <Link  to = {"/product/" + pd.id} > Show Details </Link> 
                         </td>
                      </tr>         
            ))

            setProducts({
               ...Products,
                pageCount: Math.ceil(data.length / Products.perPage),
                postData 
            })

        })

    },[Pager]);

 return (
  <div>
      <React.Fragment>
      <table className="productlist">  
       <tbody>
        {Products.postData}
       </tbody>
      </table> 
      </React.Fragment>
  
  <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Products.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>

  </div>

  )
}