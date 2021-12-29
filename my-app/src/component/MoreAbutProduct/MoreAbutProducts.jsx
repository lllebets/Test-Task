import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './style.css'


export default function MoreAbutProducts() {
    const link = useSelector(state => state.linkId.value)
    let allProduct = useSelector(state => state.productList.value); 
    let product = allProduct.filter(e => e._id === link.slice(1))

    function delitProduct() {
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", `http://localhost:8080/product/${link.slice(1)}`, true);
      xhr.onload = function () {
        console.log("Delite");
      };
      xhr.send(null);
      Location.reload()
    }

  return (
    <div className="wrapper-moreAbutProducts">
        <div className="wrapper-moreAbutProducts-img">
      <img src={product[0].imageUrl} alt="" />
    </div>
    <div className="wrapper-moreAbutProducts-info">
      <h1>{product[0].name}</h1>
      <hr />
      <div>
        <p>Опис</p>
        <p>{product[0].comments}</p>
      </div>
      <hr />
      <div>
        <p>Кількість:</p>
        <p><strong>{product[0].count}</strong></p>
      </div>
       <Link to={'/'}> <button onClick={delitProduct} className="btn btn-dark">Видалит</button></Link>
    </div>
  </div>
  );
}
