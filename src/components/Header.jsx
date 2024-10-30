import React from 'react'
import logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className='flex justify-between item-center px-10 py-6 mt-16'>
      <img src={logo} alt='Tesla' width={120} height={28} />
      <button>
        <span className='flex items-center gap-2'>
          <svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx={12} cy={12} r={10} fill='#1F2937' />
            <path
              d='M12 18.2727L15.3636 15.9091L18.7273 18.2727L12 18.2727Z'
              stroke='#fff'
              stroke-width={2}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <p>US</p>
        </span>
      </button>
    </header>
  )
}
