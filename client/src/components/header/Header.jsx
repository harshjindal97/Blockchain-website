import './Header.css'

import React from 'react'
import logo from '../../assets/logo.png'
import info from '../../assets/info.png'


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
            <div className='crypt_header-content_div'>
                <div className='crypt_header-content_div-img'>
                    <div className='crypt_header-content_div_logo'><img src={logo} alt="" /></div>
                    <div className='crypt_header-content_div_info'><img src={info} alt="" /></div>
                </div>
            </div>
            <div className='crypt_header-content_form'>
                <div className='crypt_header-content_form-function'>
                    <div className='first_input'><input type="text" placeholder='Address To' /></div>
                    <input type="text" placeholder='Amount (ETH)'/>
                    <input type="text" placeholder='Keyword (GIF)'/>
                    <input type="text" placeholder='Enter Message'/>
                </div>
                <hr />
                <button>Send Now</button>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
