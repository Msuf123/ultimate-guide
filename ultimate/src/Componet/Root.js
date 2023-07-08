import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import style from '../Style/root.module.css'
export default function Root(){
    return(
        <div className={style.outer}>
            <Nav></Nav>
            <div className={style.main}>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    )
}