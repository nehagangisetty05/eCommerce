import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './shop.module.css'

const Cart = () => {
    let [state, setState] = useState(null);
    let {id} = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setState(res.data);
        }).catch(()=>{
            console.log("loading...");
        })
    })

  return (
    <div className={styles.carMainContainer}>
        {state == null ? "nothing" : (<div key={state.id} className={styles.cartContainer}>

                <div className={styles.cartLeft}>
                    <img src={state.image} alt="" className={styles.image}/>
                </div>
                <div className={styles.cartRight}>
                    <p><span className={styles.content}>{state.title}</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloremque exercitationem itaque voluptatum repellendus reiciendis accusamus reprehenderit illum dolores veritatis quidem explicabo cum. Fugit tempora asperiores qui adipisci omnis nihil!
                    Asperiores soluta illo ratione saepe ab debitis quibusdam temporibus amet excepturi quis. Voluptas itaque autem nesciunt inventore explicabo quia adipisci fuga minima obcaecati totam. Amet animi harum odit laboriosam id!</p>
                    <p><span className={styles.contentPrice}>Price : {state.price}</span></p>
                    <p><span className={styles.boldeffect} >Category : </span>{state.category}</p>
                    <p><span className={styles.boldeffect} >Rating : </span>{state.rating.rate}</p>
                    <div className={styles.buttonContainer}>
                        <div className={styles.buttons}><Link to="/" className={styles.links}>go back</Link></div>
                        <div className={styles.buttons}><Link to={`/order/${state.id}`} className={styles.links}>order now</Link></div>
                    </div>
                    
                </div>
                
            </div>)
        }
    </div>
  )
}

export default Cart
