import { useState } from 'react'

export const TopBar = () => {
  const [show, setShow] = useState(true)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  window.addEventListener('scroll', () => requestAnimationFrame(handleScroll))
  return (
    <div
      className={`${
        show ? 'transform -translate-y-0' : 'transform -translate-y-full'
      } bg-gray-200 fixed top-0 left-0 right-0 py-2   transition-transform duration-500 z-10`}
    >
      <p className='text-center py-2  font-semibold'>
        0% APR for qualified buyers
      </p>
    </div>
  )
}
