import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ className, links }) => {
  return (

    <nav className={className}>

      {
        links.map(link => (
          <Link to={link.href} key={link.name} >{link.name}</Link>
        ))
      }

    </nav>
  )
}

export default Nav