import React, { useState } from 'react';
import aboutapi from './aboutapi';
import LoginImage from './images/login.png';

function Howtouse() {
    const [about,setAbout]=useState(aboutapi);
    return (

        <>
        

            <section className='container p-5'>
            <div className="container">

            
                <p>--AVAILABLE AT GOOGLE PLAYSTORE--</p>

               
                <div className='row d-flex'>
                    <div className='col-sm-12 col-lg-6'>
                        <img src={LoginImage} alt="" className='im'/>

                    </div>
                    <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-lg-between">
                    <h4 className='txt_style'>How to use the App?</h4>
                   {about.map((cure)=>{
                       const {id,title,para}=cure;
                       return(
                    <div className="d-flex border-dark" key={id}>
                    
                        <div>
                            <span className='rund'>{id}</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='px-4 fw-bold'>{title}</label>
                                <p className='px-4'>{para}</p>
                            </div>
                        </div>

                       )
                   })}
                   <div>

                        <button className='btn btn-outline-primary btn_style'>Learn more...</button>
                   </div>
                    </div>
                    </div>
                    </div>

                
            </section>

            {/* *----------------------------------------------------* */}
            <section className='mt-5'>
            <div className="container">
                <p className='px-5'>--AVAILABLE AT GOOGLE PLAYSTORE--</p>

               
                <div className='d-flex row flex-row-reverse p-5'>
                    <div className='col-sm-12 col-lg-6'>
                        <img src={LoginImage} alt="" className='im'/>

                    </div>
                    <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-lg-between">
                    <h4 className='txt_style'>How to use the App?</h4>
                   {about.map((cure)=>{
                       const {id,title,para}=cure;
                       return(
                    <div className="d-flex border-dark" key={id}>
                    
                        <div>
                            <span className='rund'>{id}</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='px-4 fw-bold'>{title}</label>
                                <p className='px-4'>{para}</p>
                            </div>
                        </div>

                       )
                   })}
                   <div>

                        <button className='btn btn-outline-primary btn_style'>Learn more...</button>
                   </div>
                    </div>
                    </div>
                    </div>

                
            </section>


        
            
        </>
    )
}

export default Howtouse
