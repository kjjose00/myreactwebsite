import React, { useState } from 'react';

function Contact() {
    const [contactData,setContactData]=useState({
        firstname:"",
        lastname:"",
        phoneno:"",
        email:"",
        address:"",
        message:"",
    })
    let name,value;
    const update=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setContactData({
            ...contactData,
            [name]:value,

        })
    }

    const submitdata=async (event)=>{
        event.preventDefault();
        const {firstname,lastname,phoneno,email,address,message}=contactData;
        if(firstname && lastname && phoneno && email && address && message){
        const res=fetch('https://reactfirebasewebsite-efb45-default-rtdb.firebaseio.com/userDatarecords.json',{
            method:"POST",
            headers:{
                "Content-type":"application/json",
    
            },
            body:JSON.stringify({
                firstname,
                lastname,
                phoneno,
                email,
                address,
                message,

            })
        }

        );
        if(res){
            setContactData({
                firstname:"",
                lastname:"",
                phoneno:"",
                email:"",
                address:"",
                message:"",

            })
            alert("Data stored")
        }else{
            alert("please fill the data")
        }
    }else{
        alert("please fill the data")
        }


    }

    return (
        <>
            <section className='container p-2 mt-5 mb-5'>
                <div className='row d-flex'>
                    <div className='col-lg-6 col-sm-12 d-flex flex-column contact-left'>
                        <div>

                        <h1 className='fw-bolder'>Connect With Our <br/> Sales Team</h1>
                        <p className='contact-left-text'>Lorem ipsum dolor, sit amet consectetur<br/> consequuntur modi dolorem.</p>

                        </div>
                        <div>
                            <img src="salesteam.jpeg" alt="salesteam" className='imgsize'/>
                        </div>
                    </div>
                     <div className='col-lg-6 col-sm-12'>
                    <form action="POST" className='d-flex flex-column form-class1'>
                        <div className='form_class w-100'>

                            <input type="text" placeholder='First Name'  className='text_style   txt-height' required name="firstname" value={contactData.firstname} onChange={update}/>
                            <input type="text" placeholder='Last Name' className='text_style txt-height' required name="lastname" value={contactData.lastname} onChange={update}/>
                        </div>
                        
                        
                        
                        <div className='form_class'>
                            <input type="text" placeholder='Phone Number' className='text_style txt-height' name="phoneno" value={contactData.phoneno} onChange={update}/>

                            <input type="email" placeholder='Email Id' className='text_style txt-height' name="email" value={contactData.email} onChange={update}/>
                        </div>
                        
                        
                        
                        <div className='w-100'>

                            <input type="text" placeholder='Add Address' className='w-100 txt-height' name="address" value={contactData.address} onChange={update}/>
                        </div>
                        <div className='w-100'>

                            <textarea rows="3" className='w-100 msg_style' placeholder='Enter Message Here' name="message" value={contactData.message} onChange={update}></textarea>
                        </div>
                        <div className='d-flex'>
                            <input type="checkbox"/>
                            <label className='mx-2'>Lorem ipsum dolor sit adipisicing elit.</label> 
                        </div>
                        <div className='w-100 bg-danger'>
                            <button type="submit" className='btn btn-primary w-100' onClick={submitdata}>submit</button>
                        </div>
                        

                        
                        
                            
                        



                    </form>
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default Contact
