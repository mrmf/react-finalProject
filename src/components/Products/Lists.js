import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import  '../../App.css'
import { AuthContext } from "../../App";

export default function Lists(props)  {
    const [Products, setProducts] = useState({
        offset: 0,
        data: [],
        perPage: 5,
        currentPage: 0,
        pageCount: 1
    })

    const receivedData = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(Products.offset, Products.offset + Products.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <p>{pd.title}</p>
                    <img src={pd.thumbnailUrl} alt=""/>
                </React.Fragment>)

                setProducts({
                    pageCount: Math.ceil(data.length / Products.perPage),
                   
                    postData
                })
            });
    }
    useEffect(() => {
        receivedData()
    },[]);
                                                                
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * Products.perPage;

        setProducts({
            
            currentPage: selectedPage,
            offset: offset
        },  () => {
            receivedData()
        });

    };
   
 return (
    <div>
    {Products.postData}
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