import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404() {
    return (
        <>
          <div className='w-100 page'>
          <div>

              <div className='w-100 text-center page-error'>
                  <h1 className='error'>404</h1>
              </div>
              <div className='text-center'>
                  <h4>Page Not Found Error</h4>
              </div>
              <div>
                  <NavLink className='btn btn-primary backbtn' to='/'>Back to Home</NavLink>
              </div>
          </div>
          </div>  
        </>
    )
}

export default Error404
