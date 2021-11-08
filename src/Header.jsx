import React from 'react';


function Header() {
    return (
        <>
        <section className='container-fluid header_s'>
            <div className="row">
            <div className='col-lg-6 col-sm-12 d-flex flex-column align-content-center justify-content-center order-lg-first order-last mt-2 header_section1'>
                <div className='mb-2 ps-4'>
                    <h2 className='fs-2 fst-italic'>A place for digital pay.</h2>
                </div>
                <div className='text-black ps-4'>
                    <p className='fst-italic lh-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident accusamus quisquam ullam est nulla perspiciatis tempora quasi eos voluptatem consequuntur eveniet adipisci maxime incidunt, dolorem tempore omnis porro, sunt quibusdam!
                   tempora aspernatur voluptates.</p>
                </div>
                <div>
                <form className='d-flex ps-4'>
                    <input type="email" placeholder='Email here' className='shadow-lg' required/>
                    <button type="submit" className='btn btn-outline-primary'>Get Started</button>
                </form>
                </div>

            </div>
            <div className='col-sm-12 col-lg-6 d-flex justify-content-center align-content-center mt-lg-5 mt-3 order-sm-first order-lg-last header_section2'>
                <div>
                    <img src="amazonpay.jpg" alt="" className='payimage shadow'/>
                   
                   
                    
                </div>


                    
            </div>
            </div>
        </section>
            
                
          
            
        </>
    )
}

export default Header
