import React, { useEffect, useState } from 'react'

export default function P() {
    const [mode, setmode] = useState(true)
    const [col, setcol] = useState(false)
    const [no, setno] = useState(1);
    const [name, setname] = useState("prime")
  

    const incre=()=>{
        setno(no + 1)
        
    }

    useEffect(() => {
        console.log(no,mode)
        let isrpime=true
      
        for (let i = 2; i < no; i++) {
            if (no % i === 0) {
                isrpime=false
                // setmode(false)
                // setname("Not Prime")
            }
        
        // if(no % 2=== 0){
        //     setmode(true)
        //     setname("Not Prime")
        // }
        }
        console.log(isrpime)
        setmode(isrpime)
     
    },[no])
    

    const chang=()=>{
        if(mode===false){
            setmode(true)
        }
        else if(mode===true){
            setmode(false)
        }

    }

  return (
    <>
    <div style={{backgroundColor:mode=== true? "green":"red"}}>
    <div style={{backgroudColor:"white",width:"100px",height:"100px"}} >
        <p>Is Prime : {name}</p>
        <h1>{no} </h1>
    </div>
    <div>
        <button className='btn btn-primary' onClick={incre} >Increment</button>
    </div>
    <div>
        
        <input type="checkbox"  onClick={chang} />
    </div>
    </div>

    </>
  )
}
