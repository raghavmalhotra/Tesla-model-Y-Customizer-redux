import React from 'react'

import { changeColor } from '../store/carSlice'
import { useDispatch, useSelector } from 'react-redux'

export const ColorButton = ({ texture, selected, colorName }) => {
  const dispatch = useDispatch()

  return (
    <button
      className={
        !selected && ` transition-transform duration-300 hover:scale-110 `
      }
      onClick={() => dispatch(changeColor(colorName))}
    >
      <img
        className={` ${
          selected
            ? 'border-2 border-gray-400 rounded-full p-1 w-12 h-12'
            : 'opacity-80 w-10 h-10 transition-opacity  duration-300 hover:opacity-100'
        }`}
        src={texture}
        alt={texture}
      />
    </button>
  )
}
