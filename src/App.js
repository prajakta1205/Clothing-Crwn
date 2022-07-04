import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.component'


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
        <Route path='sign-in' element={< SignIn/>}/>
        </Route>  
    </Routes>
  )
};

export default App;