import { PaymentBreakdown, AccessoriesCheckboxes } from './'
import {
  toggleFullSelfDriving,
  togglePerformanceUpgrade,
} from '../store/carSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Customizations = () => {
  const dispatch = useDispatch()
  const isPerformanceUpgrade = useSelector(
    (state) => state.car.performanceUpgrade
  )
  return (
    <>
      <div className='border p-4 mb-8 rounded-lg shadow'>
        <h3 className='font-semibold mb-2'>Full Self-Driving</h3>
        <label className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='full-self-driving-checkbox'
            className='form-checkbox h-5 w-5 text-blue-600'
            onChange={(e) => {
              dispatch(toggleFullSelfDriving(e.target.checked))
            }}
          />
          <span>Add Full Self-Driving for $8,500</span>
        </label>
      </div>

      {/* Performance Upgrade  */}
      <div className='mb-8'>
        <h3 className='font-semibold mb-2'>Performance Package</h3>
        <button
          id='performance-btn'
          className={`w-full py-4 ${
            isPerformanceUpgrade
              ? 'bg-gray-700 hover:bg-gray-600 hover:text-white text-white'
              : 'bg-gray-200 hover:bg-gray-100 text-black'
          } rounded-lg`}
          onClick={() => dispatch(togglePerformanceUpgrade())}
        >
          Performance Upgrade (+$5,000)
        </button>
      </div>

      {/* Accessories Checkboxes  */}

      <AccessoriesCheckboxes />

      <PaymentBreakdown />
    </>
  )
}
