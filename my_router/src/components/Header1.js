import React from 'react'
import { Link } from 'react-router-dom';

function Header1() {
  return (   
    <ul>
        <li><Link to = "/">Home1</Link></li>
        <li><Link to = "/About1">About1</Link></li>
        
    </ul>

    
  )
}

export default Header1
