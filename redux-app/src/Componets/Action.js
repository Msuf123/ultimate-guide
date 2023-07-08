import style from '../Styles/action.module.css'
export default function Action({dispatch}){
    return(
        <div className={style.main}>
            <div>
            <input></input>
            <button
            onClick={()=>{
              dispatch({type:'todo/add',payload:'Learn redux'})
            }}
            >Add</button>
            </div>
            <button
            onClick={()=>{
                dispatch({type:'todo/reset'})
            }}
            >Reset</button>
        </div>
    )
}