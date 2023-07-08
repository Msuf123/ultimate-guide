
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Root from './Componet/Root';
import Redux from './Componet/Content/Redux/Redux';
import FirstRedux from './Componet/Content/Redux/FirstRedux';

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Root></Root>}>
      <Route path='/' element={<Redux></Redux>}></Route>
      <Route path='/First redux app' element={<FirstRedux></FirstRedux>}></Route>
       </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
