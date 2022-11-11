import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src="./images/logo.svg" alt="" />
      <ul>
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <button>Connect wallet</button>
    </nav>
  )
}

export default Navbar