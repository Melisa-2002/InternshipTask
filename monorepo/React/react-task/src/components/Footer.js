import React from 'react'
import PabLogo from '../images/pab-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      Powered By 
      <img src={PabLogo} className="pab-logo" alt='logo'></img> 
      Pabau
    </footer>
  )
}

export default Footer
