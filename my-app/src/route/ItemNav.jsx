import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function ItemsNav(props) {
    return (
       <Link className="items-nav" to={props.url} ><span>{props.title}</span></Link>
    )
}
