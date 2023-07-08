import { NavLink } from 'react-router-dom'
import style from '../Style/nav.module.css'
export default function Nav(){
    return(
        <div className={style.main}>
            <h1>The Ultimate</h1>
            <div className={style.lesson}>
                <NavLink to='/' className={({isActive})=>(
                    isActive?style.active:style.inactive
    )}>Redux</NavLink> 
                <NavLink to='/react'className={({isActive})=>(
                    isActive?style.active:style.inactive
    )}>React</NavLink>
                <NavLink to='/node'className={({isActive})=>(
                    isActive?style.active:style.inactive
    )}>Node</NavLink>
            </div>
        </div>
    )
}