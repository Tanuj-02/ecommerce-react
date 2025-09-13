import React, { useState } from 'react'
import ItemsContext from './ItemsContext'
import { items } from '../assets/data'

const Itemsdata = (props) => {
    const [vastu] = useState(items)
    const [cart, setCart] = useState([])

    const addtocart = (id,title,price,imgSrc) =>{
      const obj =   {id,title, price, imgSrc}
      setCart([...cart,obj])
    }
    console.log(cart)
  return (
    <ItemsContext.Provider value={{vastu, cart, setCart, addtocart}}>
      {props.children}
    </ItemsContext.Provider>
  )
}

export default Itemsdata
