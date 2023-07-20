import Cards from "./Cards";
import style from '../style/first.module.css'
export default function List({emp}){
    return(
        <div className={style.list}>
            <div className={style.listinput}>
                <input></input>
                <button>&#128269;</button>
            </div>
            <div className={style.cards}>
            {emp.map((i,k)=><Cards details={i} key={k}></Cards>)}
            </div>
        </div>
    )
}