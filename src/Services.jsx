import React, { useState } from 'react';
import serviceapi from './serviceapi';

function Services() {
    const [service,setService]=useState(serviceapi)
    return (
        <>
            <section className='container border-1 border-secondary mt-5'>
                <div className='text-center'>
                    <h3 className='fw-bold'>How to send money ?</h3>
                    <div className='row'>

                    {service.map((cure,index)=>{
                        const {id,icon,title,details}=cure;
                        return(
                            <>

                        <div className='mt-5 service-content col-sm-12 col-lg-4 p-lg-3' key={id}>
                        <div className='d-flex justify-content-center'>
                            <span className='iconrounder d-grid'>

                            <i class={icon}></i>
                            </span>
                        </div>
                        <div className='service_d text-center'>
                            <h4 className='fw-bold'>{title}</h4>
                        </div>
                        <div className='service_d'>
                            <p>{details}</p>
                        </div>
                    </div>
                    </>
                        )
                    })}
                    </div>
                </div>

            </section>
            
        </>
    )
}

export default Services
