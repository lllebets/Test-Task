import React from 'react'
import MainNav from './route/MainNav'
import { useDispatch } from "react-redux";
import { setList } from "./store/productListSlice";

export default function App() {
  const dispatch = useDispatch();
  const request = new XMLHttpRequest();
  window.addEventListener('load' , ()  =>{
    request.open("GET", "http://localhost:8080/products");
    request.onload = function() {
    dispatch(setList(JSON.parse(request.response)));
    }
    request.send()
  });
  return (
  <MainNav/>
  )
}


