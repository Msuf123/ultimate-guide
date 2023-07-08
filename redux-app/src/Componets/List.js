import style from '../Styles/list.module.css'
export default function List({state}){
    return(
        <div className={style.main}>
         {state.todo.length===0?<span>No task to do</span>:state.todo.map((value,key)=>(<span key={key}>{value}</span>))}
        </div>
    )
}