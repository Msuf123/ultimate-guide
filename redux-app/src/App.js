import style from './Styles/root.module.css'
import './App.css';
import Header from './Componets/Header';
import Main from './Componets/Main';
import Footer from './Componets/Footer';

function App({state,dispatch}) {
  return (
    <div className={style.main}>
    <Header></Header>
    <Main state={state} dispatch={dispatch}></Main>
    <Footer></Footer>
    </div>
  );
}

export default App;
