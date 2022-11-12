import React, { useState } from 'react'
import Modal from './Modal'

function Navbar() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='nav'>
      <nav className='navbar'>
      <div>
        <img src="./images/logo.svg" alt="" />
        <ul>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        <button onClick={() => setShowModal(true)}>Connect wallet</button>
      </div>
    </nav>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  )
}

export default Navbar