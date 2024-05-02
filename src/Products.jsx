import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './shop.module.css'

const Products = () => {
    let [state, setState] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/").then((res)=>{
            setState(res.data);
        }).catch(()=>{
            console.log("loading")
        })
    },[])
  return (
    <div className={styles.productMainContainer}>
        <div className={styles.banner}></div><br />
        <h1 className={styles.arrival}>New Arrivals</h1><br />
        <div className={styles.productContainer}>
            {state.map((data)=>{
                return <div key={data.id}>
                    <div className={styles.productBox}>
                        <p><span className={styles.titleprice}>{data.title}</span></p>
                        <img src={data.image} alt="" />
                        <p><span className={styles.titleprice}>${data.price}</span></p>
                        <p>{data.category}</p>
                        <Link to={`cart/${data.id}`} className={styles.cartBtn}>go to cart</Link>
                    </div>
                </div>
            })}
        </div><br />
    </div>
  )
}

export default Products