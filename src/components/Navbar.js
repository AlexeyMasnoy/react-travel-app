import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
				<div className="navbar_container">
					<img src="./img/world.png" alt="world pic" className="navbar__logo"/>
					<p className="navbar__title">my travel journal.</p> 
				</div>
      </div>
    </nav>
  )
}
