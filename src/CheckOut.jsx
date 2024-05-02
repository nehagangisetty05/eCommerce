import React, { useState } from 'react'
import styles from './shop.module.css'

const CheckOut = () => {
    let [name, setName] = useState("");
    let getName = (e) => {
        setName(e.target.value)
    }

    let [add, setAdd] = useState("");
    let getAdd = (e) => {
        setAdd(e.target.value)
    }

    let [phn, setPhn] = useState("");
    let getPhn = (e) => {
      setPhn(e.target.value)
    }

    let [email, setEmail] = useState("");
    let getEmail = (e) => {
      setEmail(e.target.value)
    }
    let [pass, setPass] = useState("");
    let getPass = (e) => {
      setPass(e.target.value)
    }

    let [error, setError] = useState(false)

    let handleSubmit= (e) => {
      e.preventDefault();
      if(name.length === 0 || add.length === 0 || phn.length === 0 || email.length === 0 || pass.length === 0)
      {
          setError(true)
      }
      if(name && add && phn && email && pass)
      {
        console.log(name,add, phn, email, pass);
      }
    }

  return (
    <div className={styles.checkoutMainContainer}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.checkoutContainer}>
        <h1>Please Fill The Form</h1>
            <div><h3>Name : </h3><input type="text" placeholder='Name' name='name' value={name} onChange={getName} className={styles.inputBox}/></div>
            {error && name.length <= 0 ? <label className={styles.impt}>Name cannot be empty</label> : ""}

            <div><h3>Address : </h3><input type="text" placeholder='Address' name='add' value={add} onChange={getAdd} className={styles.inputBox}/></div>
            {error && add.length <= 0 ? <label className={styles.impt}>Address cannot be empty</label> : ""}

            <div><h3>Phone Number : </h3><input type="number" placeholder='Phone' name='phn' value={phn} onChange={getPhn} className={styles.inputBox}/></div>
            {error && phn.length <= 0 ? <label className={styles.impt}>Phone Number cannot be empty</label> : ""}

            <div><h3>Email Id : </h3><input type="email" placeholder='Email' name='email' value={email} onChange={getEmail} className={styles.inputBox}/></div>
            {error && email.length <= 0 ? <label className={styles.impt}>Email cannot be empty</label> : ""}

            <div><h3>Password : </h3><input type="password" placeholder='Password' name='pass' value={pass} onChange={getPass} className={styles.inputBox}/></div>
            {error && pass.length <= 0 ? <label className={styles.impt}>Password cannot be empty</label> : ""}

            <button className={styles.submitButton}>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default CheckOut
