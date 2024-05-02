import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import styles from './shop.module.css'

const Order = () => {
    let [state, setState] = useState(null)
    let {id} = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setState(res.data);
        }).catch(()=>{
            console.log("loading...");
        })
    })

    let [count, setCount] = useState(1);

    let increment = () => {
        setCount(count+1)
    }

    let decrement = () => {
        if(count > 1){
            setCount(count-1)
        }
        else {
            setCount(count=1)
        }
    }

    let pricecount = () => {
        return count * state.price;
    }

  return (
    <div className={styles.orderMainContainer}>
        {state == null ? "nothing" : (<div key={state.id} className={styles.orderContainer}>
            <div className={styles.orderLeft}>
                <p className={styles.content}>{state.title}</p>
                
                <p className={styles.content}>{state.Category}</p>
                <p><span className={styles.contentPrice}>Price :</span> ${state.price}</p>
                
                <div className={styles.items}>
                    <p>Items : </p><button onClick={decrement} className={styles.incredecre}>-</button>
                    <p className={styles.incdec}>{count}</p>
                    <button onClick={increment} className={styles.incredecre}>+</button>
                </div>
                <p className={styles.contentPrice}>Total Price: ${pricecount()}</p>
                <div className={styles.buttons}><Link to="/checkout" className={styles.links}>CheckOut</Link></div>
            </div>
            

            <div className={styles.orderRight}>
                <img src={state.image} alt="" className={styles.image}/>
            </div>
        </div>)
        }
    </div>
  )
}

export default Order
