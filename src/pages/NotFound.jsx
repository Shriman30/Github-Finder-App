import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='hero'>
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="text-8xl font-bold mb-8 "> Oopsies!</h1>
                <p className='text-6xl mb-8'>Error-404: Page not Found!! </p>
                <Link to='/' className='btn btn-lg btn-error'>
                    <FaHome className='mr-2'/>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound