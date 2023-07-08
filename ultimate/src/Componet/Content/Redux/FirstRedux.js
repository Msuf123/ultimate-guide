import style from '../../../Style/Content/Redux/Redux.module.css'
export default function FirstRedux(){
    return(
        <div className={style.main}>
         <h1>MAKING YOUR FIRST REDUX APP</h1>
         <p>So after we learnt about what is reducer and store.Its time to make our first redux application<br></br>
         <span className={style.underline}>Keep in mind that during this tutorial we will be passing the store info from 
         componet to component.In next lesson we will solve this
         </span>
         </p>
         <main>
            <h6>Creating our Store</h6>
            <p>
        So to make out store we have a method called as <span className={style.red}>createStore()</span> what it does is that it makes the store and return our three mehtods ie dispatch,subscribe,getState.<br></br>
            The argument it takes is reducer.So what we essentialy do is wrap our app component which is inside of <span className={style.red}>Index.js</span>.Inside of a <span className={style.orange}>Provider</span>component with this
            value of createStore() as a Props.The code below demonstrate it well.
            
            </p>
            <pre>
                <p>
            const root = ReactDOM.createRoot(document.getElementById('root'));<br></br>

root.render(<br></br>
  &lt;React.StrictMode&gt;<br></br>
  &lt;Provider&gt;<br></br>
  &lt;App /&gt;<br></br>
  &lt;/Provider&gt;<br></br>
  &lt;/React.StrictMode&gt;<br></br>
);</p>
            </pre>
            
         </main>
         
        </div>
    )
}