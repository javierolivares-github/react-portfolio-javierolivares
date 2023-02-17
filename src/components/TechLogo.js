import React from 'react'
import './TechLogo.css';

// COMPONENT - TECHLOGO
function TechLogo({ paths }) {
  console.log(paths)

  return paths.map((path, index) => (
    <img key={index} src={path} alt="Tech Logo" className='tech__logo' />
  ))

}

export default TechLogo