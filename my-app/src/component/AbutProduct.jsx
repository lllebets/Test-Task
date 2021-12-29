import React from 'react'
import "./style.css"

export default function AbutProduct(props) {
    return (
        <div className="wrapper-AbutProducts">
            <h2>{props.nameProduct}</h2>
            <p>{props.descriptionProduct}</p>
            <p><strong>{props.countProduct}</strong></p>
        </div>
        
    )
}
