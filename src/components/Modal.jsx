import React from 'react'

function Modal(props) {
  return (
    <div className='modal'>
      <div className='modal-details' onClick={(e) => e.stopPropagation()}>
        <div className='modal-details-header'>
            <h3>Connect Wallet</h3>
            <img src="./images/close.svg" alt="" onClick={props?.closeModal} />
        </div>

        <div className='modal-wallets'>
            <p>Choose your preferred wallet:</p>
            <div className='modal-wallet'>
                <div>
                    <img src="./images/metamask-head.svg" alt="" />
                    Metamask
                </div>
                <img src="./images/arrow-right.svg" alt="" />
            </div>
            <div className='modal-wallet'>
                <div>
                    <img src="./images/wallet-connect.png" alt="" />
                    Metamask
                </div>
                <img src="./images/arrow-right.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
