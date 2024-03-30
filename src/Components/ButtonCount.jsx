import { useState } from 'react'


const ButtonCount = () =>{

    const [count, setCount] = useState(0)
    
    return (
    <button className='card' onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
      )
}

export default ButtonCount;



