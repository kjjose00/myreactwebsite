import React, { useState } from 'react';
import apidata1 from './api';

function Howitworks() {
    const [api,setApi]=useState(apidata1)
    return (
        <>
               
            <div className='container shadow howitworks'>
                <div className='text-center py-3'>
                    <h3>How It Works</h3>
                </div>
                       <div className='display d-flex flex-row row'>
               {api.map((cure,index)=>{
                   const {id,icon,text,para}=cure
                   return(

                    
                    <div className='px-5 d-flex flex-column py-3 col-sm-12 col-lg-4'>
                        <div className='pb-3 w-100 text-center d-flex align-items-center justify-content-center'>
                        <span className='iconrounder d-grid'>
                             <i class={icon}></i>

                        </span>

                             

                             
                        </div>
                        <div className='text-center'>

                        <h4>{text}</h4>
                        </div>
                        <div className='w-100 hiwp text-start'>

                        <p>{para}</p>
                        </div>
                    </div>
                    

                       
               );
               })}
                    
            </div>
            </div>
            
            
            
            
            
        </>
    );
}

export default Howitworks;
