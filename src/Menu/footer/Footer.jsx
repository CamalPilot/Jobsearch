import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ links, setShowMenu }) => {
  return (
    <ul>
        {
            links.map((item,index) => (
                <li key={index}
                onClick={()=>setShowMenu(false)}>
                    <Link  to={`/${item.text}`}>
                    {item.text}
                    </Link>
                </li>
            ))
        }
    </ul>
    
  )
}

export default Footer