import React from 'react'
import './Container.css'
function Container() {
  return (
    <div className='container1'>
        {/* <img src={process.env.PUBLIC_URL+"img.jpeg"} /> */}
        <div className='photo'>
        <img src={require('./phto.jpeg')} className='img-c' />
        <p>
            Hey <b>Arpan Pandey</b>,this side
        </p>
        <h3 className='con'>Contact Me here:</h3>
        <ul className='details'>
            <li>
           <div className='ph'>
           <img className='imgg1' src={require('./wap.png')} />
           <img className='imgg1' src={require('./ph.png')} />
               
           </div>
            </li>
            <li>
                8367358707

            </li>
            
        </ul>
        </div>
        <div className='text'>
        <h1>Arpan Pandey</h1>
        <h2>
            <u>BTech(Cse)</u>

        </h2>
        <p>Lovely Professional University<br/>
        2020-2024

        </p>
        <h2>
            <u>Skills</u>
        </h2>
        <p>
            DBMS || HTML ||<br/>
             CSS || JAVASCRIPT ||<br/>
             UI || UX || Flash-Games<br/>
             Basic Of C,C++
        </p>
        <u><h2> Interests</h2></u>
        <p>Cube solving || Football || Art&Craft </p>
        </div>
    </div>
  )
}


export default Container
