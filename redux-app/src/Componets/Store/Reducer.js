const initalState={counter:null,todo:[]};
export const reducer=(state=initalState,action)=>{
  switch(action.type){
    case 'todo/add':
      return {...state,todo:[...state.todo,action.payload]}
    case 'todo/remove':
        return {...state,todo:state.todo.filter((item)=>(item!=action.payload))}
    case 'todo/reset':
        return {...state,todo:[]}
    default:
      return state;
    
  }
}