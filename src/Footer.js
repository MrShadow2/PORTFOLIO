import React from 'react'
import './Footer.css'

function  Footer() {
  return (
    <div className='foot'> 
         <ul>
            <li>
            <img className='imgg' src={require('./gmail.png')} title='2002arpandey@gmail.com'/>
            </li>

            <li>

            <a href='https://github.com/MrShadow2'><img className='imgg' src={require('./git1.png')} /></a>

            </li>
            <li>
                <a href='https://www.linkedin.com/in/arpan-pandey-0329761bb/'>
                <img className='imgg' src={require('./li1.png')} />

                </a>
            </li>
            <li >
            <a href='https://drive.google.com/file/d/16gAqV-BfGzAXRul1KGSoMrYzjhTaLezq/view'><img className='imgg' src={require('./Cvvv.png')} /></a>
            </li>

         </ul>
    </div>
  )
}

export default  Footer