
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import First from './Comp/First';
import Detail from './Comp/Detail';
import Ouutlet from './Comp/Out';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<First></First>}>
      <Route path='/' element={<Ouutlet></Ouutlet>}></Route>
      <Route path='/:id' element={<Detail></Detail>}></Route>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>

      </div>
  );
}

export default App;
