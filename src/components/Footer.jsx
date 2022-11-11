import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-inner'>
        <div>
          <img className='footer-logo' src="./images/footer-logo.svg" alt="" />
          <div>
            <img src="./images/facebook.svg" alt="" />
            <img src="./images/instagram.svg" alt="" />
            <img src="./images/twitter.svg" alt="" />
          </div>
          <p>&copy; 2022 Metabnb</p>
        </div>
        <ul>
          <li>Community</li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li>Places</li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
        <ul>
          <li>About us</li>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer