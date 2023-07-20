
import { useEffect, useState } from 'react'
import req from './request'
import style from  '../style/first.module.css'
import List from './List'

export default function Ouutlet(){
    const[emp,setemp]=useState([{},{},{}])
    const url='https://jsonplaceholder.typicode.com/todos/1'
    useEffect(()=>{
     req(url).then((res)=>{
      console.log(res)
      setemp([...emp,res])})
     
     console.log(emp)
    },[])
    return(
        <div>
            {emp.length===0?<span className={style.loading}>Loading</span>:<List emp={emp}></List>}
        </div>
    )
}