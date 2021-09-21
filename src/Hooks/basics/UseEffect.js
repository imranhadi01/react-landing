import React, {useState, useEffect} from 'react'
import "./style.css"

const UseEffect = () => {
   const initialData = 0;
  
   const  [myNum,  setMyNum] = useState(initialData);
   console.log(myNum);
  
  useEffect(() => {
    document.title = `hello (${myNum})`
  }, );
  
   return (
        <>
        <div className="center_div">
            
            <p>{myNum}</p>
            <div className="button2" onClick={ () => setMyNum(myNum+1) }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Incr
        </div>
       
        </div>


        </>
    )
}

export default UseEffect
