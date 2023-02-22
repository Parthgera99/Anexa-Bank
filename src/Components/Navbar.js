import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div id='Container'>

        <svg id='MainLogo' width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_151_1080)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9517 37.9553L20.1616 34.9674V17.3572H16.4895L20.1616 10.9978V0L11.9517 2.98792V20.5984L15.6228 26.9567H11.9517V37.9553ZM8.20994 20.5972L4.53882 26.9567H8.20994V30.6984L0 33.6864V9.7176L8.20994 6.72968V20.5972ZM23.9023 17.3572H27.5735L23.9023 10.9984V7.25684L32.1123 4.26892V28.2377L23.9023 31.2256V17.3572Z" fill="#F3F3F3"/>
            </g>
            <defs>
            <clipPath id="clip0_151_1080">
            <rect width="32.1123" height="37.9553" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <div id='MainHeading'>
            Anexa
        </div>

        <div id='NavBar'>
            <div className='NavItems'>
                Start
            </div>
            <div className='NavItems'>
                Privacy
            </div>
            <div className='NavItems'>
                Smart Cap
            </div>
            <div className='NavItems'>
                Anexa Credit Card
            </div>
        </div>
    </div>
  )
}
