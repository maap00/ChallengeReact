import { useState } from 'react'


// const ButtonColor = (props) =>{

//     const [count, setCount] = useState(0)
    
//     return (
//     <button style={{backgroundColor: props.color}} onClick={() => setCount((count) => count + 1)}>
//       {props.label}
//     </button>
//       )
// }
const ItemListContainer = (props) =>{

    const [color, setColor] = useState('green')
    
    return (
        <div>
            <p>{props.label}</p>   
        </div>
      )
}

export default ItemListContainer;



