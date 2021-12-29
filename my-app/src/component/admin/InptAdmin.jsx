import React from 'react'
import {useDispatch} from "react-redux";
import {change} from "../../store/productSlice"



export default function   InptAdmin(props) {
    const dispatch = useDispatch()

    const changeData = (event) =>{
      event.preventDefault();
      dispatch(change([props.keyName, event.target.value])); 
    }
    return (
        <input onChange={changeData} value={props.data} className="form-control" type="text" />
    )
}
