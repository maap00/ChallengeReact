import { useState } from 'react'


// const ButtonColor = (props) =>{

//     const [count, setCount] = useState(0)
    
//     return (
//     <button style={{backgroundColor: props.color}} onClick={() => setCount((count) => count + 1)}>
//       {props.label}
//     </button>
//       )
// }
const ButtonColor = ({children}) =>{

    const [color, setColor] = useState('green')
    
    return (
      <>

      <button style={{backgroundColor:color}} onClick={() => setColor((color) => 'pink')}>
        {children}
      </button>

      </>
      )
}

export default ButtonColor;



