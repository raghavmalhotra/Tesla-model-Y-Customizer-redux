import React from 'react'
import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className='flex justify-between item-center px-10 py-6 mt-16'>
      <img src={logo} alt='Tesla' width={120} height={28} />
      <button>
        <span className='flex items-center gap-2'>
          <FontAwesomeIcon icon={faGlobe} />
          <p>US</p>
        </span>
      </button>
    </header>
  )
}
