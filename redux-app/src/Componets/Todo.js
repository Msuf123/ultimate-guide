import style from '../Styles/todo.module.css'
import Action from './Action'
import List from './List'
export default function Todo({state,dispatch}){
    return(
        <div className={style.main}>
         <h3>Tasks</h3>
         <Action dispatch={dispatch}></Action>
         <List state={state}></List>
        </div>
    )
}