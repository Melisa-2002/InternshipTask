import React from 'react'

const Header = ({step}) => {
  return (
    <header className="header">
        <div className="header-text">Choose Service</div>
        <span>Step {step}</span>
    </header>
  )
}

export default Header;
