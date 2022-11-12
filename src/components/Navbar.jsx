import React, { useState } from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'

function Navbar() {
  const [showModal, setShowModal] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <div className='nav'>
      <nav className='navbar'>
      <div>
        <Link to='/' onClick={() => setDropdown(false)}><img className='logo' src="./images/logo.svg" alt="" /></Link>
        <img onClick={() => setDropdown(!dropdown)} className='drop' src="./images/navbar-icon.svg" alt="" />
        <span>
          <p onClick={() => setShow(!show)}>Features <img  className={show !== false ? 'rotate' : ''} src="./images/arrow-down.svg" alt="" /></p>
        <ul className={show !== false ? 'show' : 'hide'}>
          <Link to='/' onClick={() => setShow(!show)}><li>Home</li></Link>
          <Link to='/placetostay' onClick={() => setShow(!show)}><li>Place to stay</li></Link>
          <li onClick={() => setShow(!show)}>NFTs</li>
          <li onClick={() => setShow(!show)}>Community</li>
        </ul>
        </span>
        <button onClick={() => setShowModal(true)}>Connect wallet</button>
      </div>
    </nav>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}

      <div className="dropdown" style={dropdown !== false ? {height: '100vh', overflow: 'hidden'} : {height: 0, overflow: 'hidden'}}>
        <ul>
          <Link to='/' onClick={() => setDropdown(!dropdown)}><li>Home</li></Link>
          <Link to='/placetostay' onClick={() => setDropdown(!dropdown)}><li>Place to stay</li></Link>
          <li onClick={() => setDropdown(!dropdown)}>NFTs</li>
          <li onClick={() => setDropdown(!dropdown)}>Community</li>
        </ul>
        <button onClick={() => setShowModal(true)}>Connect wallet</button>
      </div>
    </div>
  )
}

export default Navbar