import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Work.css'

function Work() {
  return (
    <>
    <Navbar/>
    <div className='main'>
      <ul>
        <li>
        <img className='portfolio-1' src={require('./port-22.png')} />
        </li>
        <li>
        <img className='portfolio-2' src={require('./portfolio-1.png')} />
        </li>
        <li>
        <img className='portfolio-1' src={require('./portfolio-2.png')} />
        </li>
        
      </ul>
    </div>
    <div>
      <p className='txtt'>Some demo of my Work</p>
    </div>
    <div>
      <ul>
      <li>
        <img className='port-3' src={require('./port-3.png')} />
        </li> 
        <li>
        <img className='port-3' src={require('./port-4.png')} />

        </li>
        
        <li>
        <img className='port-3' src={require('./game-1.png')} />
        </li>
        <li>
        <img className='port-3' src={require('./game-2.png')} />
        </li>
        <li>
        <img className='port-3' src={require('./game-3.png')} title='' />
        </li>
      </ul>
    </div>
  
    
    </>
  )
}

export default Work