import React, {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
    const {alert} = useContext(AlertContext);
  return (
    alert !== null &&(
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
            <h4 className='flex-1 text-base font-semibold leading-7 text-red-400'><strong>Error: {alert.message}</strong></h4>
            )}
        </p>
    )
  )
}

export default Alert