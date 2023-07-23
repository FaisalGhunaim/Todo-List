import React, { useEffect } from 'react'
import List from './List'

const Alert = ({ type, msg, removeAlert , List }) => {
  
  useEffect(() => {
   setTimeout(() => {
     removeAlert()
     console.log('hi')
    }, 3000)

   },[List])
  return <p className={`alert alert-${type}`}>{msg}</p>
}


export default Alert
