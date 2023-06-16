import './Header.css'

import React from 'react'

const Header = () => {

    const Connect_wallet = () =>{
        
    }

  return (
    <div className='crypt_header'>
        <div className='crypt_header-container'>
            <div className='crypt_header-container_heading'>
                <h1>Send crypto <br/> across the world</h1>
                <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Crypto</p>
            </div>
            
            <button type='button' onClick={Connect_wallet}>Connect</button>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Reliablity</td>
                            <td>Security</td>
                            <td>Ethereum</td>
                        </tr>
                        <tr>
                        <td>Web 3.0</td>
                        <td>Low Fees</td>
                        <td>Blockchain</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='crypt_header-content'>
            <div className='crypt_header-content_div'>dafd</div>
        </div>
    </div>
  )
}

export default Header
