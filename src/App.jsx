import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
  const [wdth,setWidth] = useState(0)
  const [isHalf,setIsHalf] = useState(false)


    useEffect(()=>{
      if(wdth < 100){
       let id = setTimeout(()=>{
          setWidth(pre=>pre+1)
          wdth > 49 && setIsHalf(true) 
        },100)
        if(wdth=== 100) clearTimeout(id)
      }


    },)
 console.log(wdth)

  return (
    <>
    <div className='main'>

    <div className='bar'>

      <p style={{color:`${isHalf ? "green": "black" }`}} className='percent' >{wdth}%</p>
      <div style={{width:`${wdth}%` }} className='clr'></div>
    </div>


    </div>
    </>
  )
}

export default App