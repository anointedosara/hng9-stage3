import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <div>
        <img src="./images/logo.svg" alt="" />
        <ul>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        <button>Connect wallet</button>
      </div>
    </nav>
  )
}

export default Navbar