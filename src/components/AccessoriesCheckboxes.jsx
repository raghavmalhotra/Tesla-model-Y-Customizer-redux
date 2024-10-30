import { useDispatch } from 'react-redux'
import {
  toggleSunShade,
  toggleCenterConsoleTrays,
  toggleAllWeatherInteriorLiner,
} from '../store/carSlice'

export const AccessoriesCheckboxes = () => {
  const dispatch = useDispatch()
  return (
    <div className='my-8'>
      <h3 className='font-semibold mb-2'>Accessories</h3>
      <div className='space-y-4'>
        <label className='flex items-center justify-between py-4 px-4 border rounded-lg shadow'>
          <span>Center Console Trays</span>
          <span className='flex items-center space-x-2'>
            <input
              type='checkbox'
              className='accessory-form-checkbox h-5 w-5'
              onChange={(e) => {
                dispatch(toggleCenterConsoleTrays(e.target.checked))
              }}
            />
            <span>$35</span>
          </span>
        </label>
        <label className='flex items-center justify-between py-4 px-4 border rounded-lg shadow'>
          <span>Sunshade</span>
          <span className='flex items-center space-x-2'>
            <input
              type='checkbox'
              className='accessory-form-checkbox h-5 w-5'
              onChange={(e) => {
                dispatch(toggleSunShade(e.target.checked))
              }}
            />
            <span>$105</span>
          </span>
        </label>
        <label className='flex items-center justify-between py-4 px-4 border rounded-lg shadow'>
          <span>All-Weather Interior Liners</span>
          <span className='flex items-center space-x-2'>
            <input
              type='checkbox'
              className='accessory-form-checkbox h-5 w-5'
              onChange={(e) => {
                dispatch(toggleAllWeatherInteriorLiner(e.target.checked))
              }}
            />
            <span>$225</span>
          </span>
        </label>
      </div>
    </div>
  )
}
