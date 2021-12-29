import React from 'react'

import ItemsNav from './ItemNav';
import { useSelector } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router';
import HomePage from '../pages/HomePage';
import SortByName from '../pages/SortByName';
import SortByCount from '../pages/SortByCount';
import FormAdmin from '../component/admin/FormAdmin';
import MoreAbutProducts from '../component/MoreAbutProduct/MoreAbutProducts';
import "./style.css"





export default function MainNav() {
    const link = useSelector(state => state.linkId.value)
    
    return (
       <BrowserRouter>
        <div className="wrapper-byrgerMeny">
            <input type="checkbox" name="checkbox_menu" id="checkbox_menu" />
            <label htmlFor="checkbox_menu" className="labelMenu">МЕНЮ</label>
            <nav className="byrgerMeny">
            <ItemsNav url=""  title="Головна" />
            <ItemsNav url="/sortByName"  title="Cортувати за Іменем"/>
            <ItemsNav url="/sortByCount"   title="Coртувати за Кількостю"/>
            <ItemsNav url="/Admin" title="Для Адміна"/>
            </nav>
        </div>
                <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path={link} element={<MoreAbutProducts />}/>
                <Route path="/sortByName" element={<SortByName/>}/>
                <Route path="/sortByCount" element={<SortByCount/>}/>
                <Route path="/Admin" element={<FormAdmin/>}/>
                </Routes>
       </BrowserRouter>
    )
}
