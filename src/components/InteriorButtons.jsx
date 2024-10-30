import { ColorButton } from './ColorButton.jsx'
import { interiorDark, interiorLight } from '../assets/images/buttons/'
import { useSelector } from 'react-redux'

export const InteriorButtons = () => {
  const interiorColor = useSelector((state) => state.car.interiorColor)
  // console.log(interiorColor)

  return (
    <div className='my-8'>
      <h3 className='font-semibold mb-2'>Interior Color</h3>
      <div className='flex space-x-4'>
        <ColorButton
          texture={interiorDark}
          selected={
            interiorColor === '/src/assets/images/interior/interior-dark.jpg'
          }
          colorName='interiorDark'
        />
        <ColorButton
          texture={interiorLight}
          colorName='interiorLight'
          selected={
            interiorColor === '/src/assets/images/interior/interior-light.jpg'
          }
        />
      </div>
    </div>
  )
}
