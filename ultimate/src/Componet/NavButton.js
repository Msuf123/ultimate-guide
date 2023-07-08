import { useNavigate } from 'react-router-dom'
import style from '../Style/Content/navbutton.module.css'
export default function Navbuttons({back,next}){
    const navigate=useNavigate();
    return(
        <div className={style.main}>
          <button onClick={()=>{
           navigate(back)
          }}>
            {back}
          </button>
          <button  onClick={()=>{
           navigate(next)
          }}>
            {next}
          </button>
        </div>
    )
}