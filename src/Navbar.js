import React from 'react'
import './Navbar.css'
import{Link} from "react-router-dom";
function Navbar({childComponet}) {
  return (
    <div className='container'>
        <nav className='Navbar'>
          <ul className='Items'>
            <li className='list-Items'>
              <Link to='/'>
              My_Profile
              </Link>
            </li>
            <li>
              <div className='circle' style={{padding:0,margin:0}}>
                    <div className='circle1'></div>
              </div>
            </li>
            <li className='list-Items'>
            <Link to='/work'>My_Work</Link>


            
            </li>
          </ul>
        </nav>
        {childComponet}
    </div>
  )
}

export default Navbar