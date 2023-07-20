import { useNavigate } from 'react-router-dom'
import style from '../style/card.module.css'
import img from '../Untitled.png'
export default function Cards(props){
    const nav=useNavigate()
    return(
        <div className={style.main}>
            <img src={img}></img>
            <div className={style.options}>
            <span className={style.name}>emp_name</span>
            <button
            onClick={()=>{
                nav('3')
            }}
            >More</button>
            <button>Edit</button>
            <button>Delete</button>
            </div>

        </div>
    )
}