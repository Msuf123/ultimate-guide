import { useEffect } from 'react'
import style from '../style/first.module.css'
import { useParams } from 'react-router-dom'
import img from '../Untitled.png'
export default function Detail(){

    const id=useParams()
    useEffect(()=>{
        console.log(id.id)
    })
    return(
        <div className={style.detail}>

    <div className={style.img}>
    <img src={img}></img>
    <button>&#x2190;</button>
    </div>
    <div className={style.info}>
    <span>Name:</span>
    <span>Salary:</span>
    <span>Age:</span>
    <span>Id:</span>
    </div>
    
        </div>
    )
}