import style from '../../../Style/Content/Redux/Redux.module.css'
import Navbuttons from '../../NavButton'
export default function Redux(){
    return(
        <div className={style.main}>
            <p>
                So guys you might be asking why use redux.<br></br>
                Preety simple as in our last project you saw that we made a marvel super hero search<br></br>
                It works fine but there i realized that i was passing too many props <br></br>
                So to avoid this we use redux.It have a store that have all the state and components can retrive it<br></br>
                hence avoiding prop drilling.<br></br>
                Lets look at how store works.

            </p>
            <h4>Store</h4>
            <p>
                To make a store we use a createStore() method and provied a reducer(Which is a function,Will explain later)
                Store have three methods getState(),subscribe(),dispatch()<br></br>
                To make a Stor we Have the following code :<br></br></p>
                <pre>
                    cosnt store=()=&gt;&#123;<br></br>
                    <br></br>
                    <span className={style.red}>const state;</span><br></br>
                    <br></br>
                        <span className={style.aqua}>cosnt listner=[]</span><br></br>
                        <br></br>
                       <span className={style.orange}>const getState=()=&gt; &#123;
                        
                        return state
                        &#125;</span><br></br>
                        <br></br>
                        <div className={style.yellow}>
                        const subscribe=(function)=&gt; &#123;<br></br>
                           listner.push(function)<br></br>
                           return ()=&gt; &#123;<br></br>
                            listner=listner.filter((a)=&gt; (function!=a))<br></br>

                           &#125;<br></br>
                           &#125;<br></br>
                           </div>
                           <br></br>
                       <div className={style.green}>cosnt dispatch=(object)=&gt; &#123;<br></br>
                        state=reducer(state,object);<br></br>
                        listner.foreach<span className={style.parnethesis}>(</span>(a)=&gt; &#123;
                        a()
                        &#125;
                        <span className={style.parnethesis}>)</span><br></br>
                        &#125;<br></br></div>
                        <br></br>
                        <span className={style.red}>dispatch(&#123;&#125;)<br></br></span>
                        <br></br>
                        <span className={style.purple}>return &#123; getState,subscribe,dispatch&#125;</span><br></br>
                        <br></br>
                        &#125;<br></br>
                </pre>
                <h4>The vaiables</h4>
            <p>
            
                Now the above code may seem complecated but its not.Let me explain<br></br>
            first the light red part we decalare a state variable <br></br>

            
            
                Now the text in aqua is the one which will hold all the function.<br></br>
                That will be executed after the action is dispatch
            </p>
            <p>
                 <h4>The methods</h4>
                 <h6>getState()</h6>
            The first method that we will understand is in orange color.It's getState,<br></br>
            what this do is simply return the state which is currently undefined.You might be <br></br>
            thinking that store does not return the undefined when we intialize it and thats true we will<br></br>
            explore the reason in dispatch method.
             <h6>subscribe()</h6>
             Subscribe it takes one argunemt that is a function and will execute it after the <br></br>
             action is dispatched to the store.In the code which is yellow in color is subscribe method<br></br>
             First it push the provied argunemt into the listner array and then return a method which is <br></br>
             responsible for removing the suppled function from the array so this means is that it will not <br></br>
             be executed when we dispatch action.eg
             <div className={style.example}>
             cosnt unsubscribe=store.subscribe(myfunction)<br></br>
             unsubscribe()
             </div>
             Now in above code you can see that we called a store and then supplied myfunction as argunemt<br></br>
             and the store the returned value in unsubscribe.When we will invoke unsubscribe it will unsubscribe<br></br>
             myfunction form the store and it will  not be executed.
            <h6>dispatch()</h6>
            This is the place where all the magic happens.What it does is that it calls the reducer with state and <br></br>
            object as argunemt.Assign that result to the state. Then we need to invoke all the function which are subscribed <br></br>
            to it,So we call listner.foreach() and call every function in the listner array variable.
            <h6>Calling dispatch()</h6>
            In the code above you can see that we called the dispatch whith an empty object so what this <br></br>
            essentialy do is call the reducer with empty object and as we know reducer will return the intial state because<br></br>
            we dispatch a object which do not have type property so reducer default case is to return the intial state.<br></br>
            <h6>Return Statement</h6>
            In the end what we do is we return these function.
            </p>
           <Navbuttons back='Intro to reducer' next='First redux app'></Navbuttons>
        </div>
    )
}