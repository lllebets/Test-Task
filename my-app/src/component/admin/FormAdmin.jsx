import React from 'react'
import InptAdmin from './InptAdmin';
import './style.css'
import { useSelector } from "react-redux";


export default function FormAdmin() {
    const product = useSelector((state) => state.product.value);
    const createProduct = (event) => {
        event.preventDefault()
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/product', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(product))
    };

    return (
        <>
            <form className="wrapper-adminForm">
            <label> URL foto
                <InptAdmin data={product.imageUrl} keyName="imageUrl" />
            </label>
            <label> Назва:
                <InptAdmin data={product.name} keyName="name" />
            </label>
            <label> Kількість:
                <InptAdmin data={product.count} keyName="count" />
            </label>
            <label> Ширина:
                <InptAdmin data={product.sizeWidth} keyName="sizeWidth" />
            </label>
            <label> Висота:
                <InptAdmin data={product.sizeHeight} keyName="sizeHeight" />
            </label>
            <label> Вага:
                <InptAdmin data={product.weight} keyName="weight" />
            </label>
            <label> Коментар:
                <InptAdmin data={product.comments} keyName="comments" />
            </label>
            <button onClick={createProduct} type="button" className="btn btn-primary">Добавити товар</button>
        </form>
        </>
    )
}
