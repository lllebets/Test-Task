import React from 'react'
import CartProducts from '../component/CartProducts'
import { useSelector } from "react-redux";
import "../component/style.css"

export default function SortByName() {
    let allProduct = useSelector(state => state.productList.value);  
    let list = [];
    const items = [...allProduct];
    items.sort((a, b) => a.name < b.name)
        items.forEach(product => {
          list.push(
              <CartProducts
              fotoProducts={product.imageUrl}
              nameProduct={product.name}
              descriptionProduct={product.comments}
              countProduct={product.count}
              idProduct={product._id}
              />
          );
      })
   
    return (
        <div className='wraper-AllCart'>
           {list}
        </div>
    )
}
