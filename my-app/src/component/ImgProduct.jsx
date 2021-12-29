import React from 'react'
import "./style.css"

export default function ImgProduct(props) {
    return (
        <div>
            <img className="wrapper-FotoProducts" src={props.fotoProducts} alt={props.altfotoProducts} />
        </div>
    )
}
