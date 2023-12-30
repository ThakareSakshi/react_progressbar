import React from 'react'
import { useEffect, useState } from 'react';

const ProgressBar = () => {

    const [progress,setProgress]=useState(0);
    const [isloading,setIsLoading]=useState("loading...");
    const loaded=()=>{
      setIsLoading("loaded succussFully!")
    }
  

  useEffect(()=>{
    if(progress<100){
     const timer=setTimeout(()=>{
      const p=progress+1;
      setProgress(p);
      console.log(p);
     },100)

     
    }else{
        loaded();
    }

    
  },[progress]);
  return (
    <>
    <div className='progressbar'>
        <div className='progress' 
        style={{
            
            backgroundColor: "green",
            transition:" all .3s linear",
            width:progress+"%",
            height:"100%",
            }}>{progress}%</div>

      
    </div>
    <p>{isloading}</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSht0TwHro0o-MpMI5KHCn30Kk-oDintpW37nTt--Wwt3ug4Rh_7A0_nlybfZlaie4b0&usqp=CAU" alt="" style={{opacity:progress+"%"}}/>
    </>
  )
}

export default ProgressBar
