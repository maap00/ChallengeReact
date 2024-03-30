import React, { Component } from 'react'
// import { library, dom } from '@fortawesome/fontawesome-svg-core'
//  import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
 import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reactLogo from '../assets/car.svg'
import { useState } from 'react'
import '../App.css'





// export class CartWidget extends Component {

const CartWidget = () => {
  const [count, setCount] = useState(0)

    return (
      <div className=''>
      
         <div className=''>   
        </div> 

          <div className=''>
          <a className='Count' conClick={()=>count}  target="_blank">
            {count}

          </a>
            <img src={reactLogo} className="logo react" alt="React logo" />
                 
          </div>
        
      
      </div>
    )
  
}

export default CartWidget

