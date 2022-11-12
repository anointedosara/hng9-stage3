import React, { useState } from 'react'
import cardData from '../data'

function Home() {
    const [search, setSearch] = useState('')
  return (
    <div className='home'>
        <div className='home-intro'>
            <div className='home-intro-text'>
                <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className='home-form'>
                    <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search for location' />
                    <button>Search</button>
                </div>
            </div>
            <div className='home-intro-img'>
                <img src="../images/rent-img.svg" alt="" />
            </div>
        </div>

        <div className='home-logos'>
            <div>
                <img src="../images/mb-token.svg" alt="" />
                <img src="../images/metamusk.svg" alt="" />
                <img src="../images/opensea.svg" alt="" />
            </div>
        </div>

        <div className='home-nfts'>
            <h2>Inspiration for your next adventure</h2>
            <div className='home-nfts-container'>
                {
                    cardData?.map((item, i) => <div className='home-nfts-container-item' key={i}>
                        <img src={item?.image} alt="" />
                        <div>
                            <p>{item?.name}</p>
                            <p><strong>{item?.perNight}</strong></p>
                        </div>
                        <div>
                            <p>{item?.distance}</p>
                            <p>{item?.availability}</p>
                        </div>
                        <img className='stars' src="../images/stars.svg" alt="" />
                    </div>)
                }
            </div>
        </div>

        <div className='home-metabnb'>
            <div className='metabnb'>
                <div className='home-metabnb-text'>
                    <h2>Metabnb NFTs</h2>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                </div>
                <div className='home-metabnb-img'>
                    <img src="../images/metabnb-img.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home