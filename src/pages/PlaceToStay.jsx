import React, { useState } from 'react'
import placeToStayData from '../data2'

function PlaceToStay() {
  const [style, setStyle] = useState(false)

  const locations = ['Resturant', 'Cottage', 'Castle', 'fantast city', 'beach', 'Carbins', 'Off-grid', 'Farm']
  
  window.addEventListener('scroll', (e) => {
    setStyle(false)
  });
  return (
    <div className='place'>
      <div className='place-locations'>
        <ul className={style !== false ? 'show' : 'hide'}>
          {
            locations?.map((item, i) => <li key={i}>{item}</li>)
          }
        </ul>
        <div onClick={() => setStyle(!style)}>
          Location
          <img src="./images/location-icon.svg" alt="" />
        </div>
      </div>

      <div className='home-nfts'>
        <div className='home-nfts-container'>
          {
            placeToStayData?.map((item, i) => 
            <div className='home-nfts-container-item' key={i}>
              <img src={item?.image} alt="" />
              <div>
                <p>{item?.name}</p>
                <p><strong>{item?.perNight}</strong></p>
              </div>
              <div>
                <p>{item?.distance}</p>
                <p>{item?.availability}</p>
              </div>
              <img className='stars' src="./images/stars.svg" alt="" />
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default PlaceToStay
