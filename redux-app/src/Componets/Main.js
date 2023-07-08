import style from '../Styles/middle.module.css'
import Clock from './Clock'
import Todo from './Todo'
export default function Main({state,dispatch}){
    return(
        <div className={style.main}>
          <Clock></Clock>
          <Todo state={state} dispatch={dispatch}></Todo>
        </div>
    )
}