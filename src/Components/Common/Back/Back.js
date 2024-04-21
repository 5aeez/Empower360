import React from 'react'
import { useLocation } from "react-router-dom"

const Back = ({ Title }) => {
    const location = useLocation()
  return (
    <div>
        <section className='Back'>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <h1>{ Title }</h1>
        </section>
        <div className='Margin'></div>
    </div>
  )
}

export default Back