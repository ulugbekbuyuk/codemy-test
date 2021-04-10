import React, { useState } from 'react'

const Jahongir = () => {
    const [plus,setPlus]=useState(0)
    
    return (
        <div>
            <p>{plus}</p>
            <button onClick={()=>setPlus((num)=>num+1)}>increament</button>
        </div>
    )
}

export default Jahongir
