import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const App=()=>{
    
    const[inc,setinc]=useState(0);
const incre=()=>{
    setinc(()=>{
        return (inc+1);
    });

};
const decre=()=>{
    if(inc>0){
    setinc(inc-1);}
    
    else{
        alert('sorry ,zero limit reached');
        setinc(0);
    }
};


    return(
        <>
        <h1>Increment/Decrement By 1</h1>
            <div className="main_div">
           
                    <div className="center_div">
                    <h2>{inc}</h2><br/>
                    <div className='btn_div'>
                    <Tooltip title="Add" aria-label="add">
                    <button onClick={incre}>

                    <AddIcon/>
                     </button>
                     </Tooltip>
                     <Tooltip title="Delete">
                    <button onClick={decre} >
                        <RemoveIcon/>
                    </button>
                    </Tooltip>
                    </div>
                </div>
            </div>

        </>
    );
};

export default App;
