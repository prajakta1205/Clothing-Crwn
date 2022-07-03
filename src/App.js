import React from 'react';
import {Routes,Route,Outlet} from 'react-router-dom'
import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component';



const Shop=()=>{
  return(
    <h1>Shop</h1>
  )
}

const App = () => {
  return(
    <Routes>
      <Route path='' element={< Navigation/>}>
        <Route index element={< Home/>}/>
        <Route path='Shop' element={< Shop/>}/>
       
        </Route>  
    </Routes>
  )
};

export default App;