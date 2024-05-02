import React from 'react'
import styles from "./shop.module.css"
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <div className={styles.nav}>
        <article className={styles.left}>Logo</article>
        <article className={styles.right}>
            <NavLink to = "/" className={styles.links}>Products</NavLink>
            <NavLink to = "/cart" className={styles.links}>Cart</NavLink>
            <NavLink to = "/order" className={styles.links}>Order</NavLink>
            <NavLink to = "/checkout" className={styles.links}>Checkout</NavLink>
        </article>
    </div>
  )
}

export default NavBar