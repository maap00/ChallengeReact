import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonCount from './Components/ButtonCount'
import ButtonColor from './Components/ButtonColor'
import Navbar from './Components/NavBar' 
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <>
      <Navbar/> 
      <ItemListContainer label='Aca de desarrolla la e-commerce'/>   
      <ButtonColor>
        Hello
      </ButtonColor>    
      
    </>
  )
}

export default App
