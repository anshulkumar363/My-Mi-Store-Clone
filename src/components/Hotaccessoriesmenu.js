import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hotaccessoriesmenu.css'
const Hotaccessoriesmenu = () => {
  return (
    <div className="Hotaccessoriesmenu">
        <Link className='HotaccessoriesLink' to='/music'>Music Store</Link>
        <Link className='HotaccessoriesLink' to='/smartDevice'>Smart Device</Link>
        <Link className='HotaccessoriesLink' to='/home'>Home</Link>
        <Link className='HotaccessoriesLink' to='/lifeStyle'>Life Styles</Link>
        <Link className='HotaccessoriesLink' to='/mobileAccessories'>Mobile Accessories</Link>
    </div>
  )
}

export default Hotaccessoriesmenu