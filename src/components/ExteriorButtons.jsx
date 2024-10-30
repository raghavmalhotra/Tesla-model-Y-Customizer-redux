import { ColorButton } from './ColorButton.jsx'
import {
  UltraRed,
  StealthGray,
  quickSilver,
  solidBlack,
  pearlWhite,
  deepBlueMetallic,
} from '../assets/images/buttons/'

import { useSelector } from 'react-redux'

export const ExteriorButtons = () => {
  const exteriorColor = useSelector((state) => state.car.exteriorColor)
  // console.log(exteriorColor)

  return (
    <div className='my-8'>
      <h3 className='font-semibold mb-2'>Exterior Color</h3>
      <div className='flex space-x-4'>
        <ColorButton
          texture={UltraRed}
          selected={
            exteriorColor === '/src/assets/images/exterior/ultra-red.jpg'
          }
          colorName='ultraRed'
        />
        <ColorButton
          texture={StealthGray}
          colorName='stealthGrey'
          selected={
            exteriorColor === '/src/assets/images/exterior/stealth-grey.jpg'
          }
        />
        <ColorButton
          texture={quickSilver}
          colorName='quickSilver'
          selected={
            exteriorColor === '/src/assets/images/exterior/quicksilver.jpg'
          }
        />
        <ColorButton
          texture={solidBlack}
          colorName='solidBlack'
          selected={
            exteriorColor === '/src/assets/images/exterior/solid-black.jpg'
          }
        />
        <ColorButton
          texture={pearlWhite}
          colorName='pearlWhite'
          selected={
            exteriorColor === '/src/assets/images/exterior/pearl-white.jpg'
          }
        />
        <ColorButton
          texture={deepBlueMetallic}
          colorName='deepBlueMetallic'
          selected={
            exteriorColor ===
            '/src/assets/images/exterior/deep-blue-metallic.jpg'
          }
        />
      </div>
    </div>
  )
}
