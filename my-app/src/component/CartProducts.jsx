import React from 'react'
import { setLink } from '../store/linkIdSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AbutProducts from './AbutProduct'
import ImgProduct from './ImgProduct';
import "./style.css"

export default function CartProducts(props) {
    const dispatch = useDispatch();
    let link = "/" + props.idProduct;
    function change(){
    dispatch(setLink(link))
    }

    return (
        <div className="container-AbutProducts">
            <ImgProduct fotoProducts={props.fotoProducts}/>
            <AbutProducts nameProduct={props.nameProduct} descriptionProduct={props.descriptionProduct} countProduct={props.countProduct}/>  
            <Link to={link}><button onClick={change} className="btn btn-outline-dark"><strong>Купити</strong></button></Link>
        </div>
    )
}
