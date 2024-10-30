import {
  removePerformanceWheels,
  addPerformanceWheels,
} from '../store/carSlice'
import { useDispatch, useSelector } from 'react-redux'
export const WheelButtons = () => {
  const dispatch = useDispatch()
  const performanceWheels = useSelector((state) => state.car.performanceWheels)
  return (
    <div className='mb-8'>
      <h3 className='font-semibold mb-2'>Wheels </h3>
      <button
        className={`w-full py-4 mb-2 ${
          !performanceWheels
            ? 'bg-gray-700 hover:bg-gray-600 hover:text-white text-white '
            : 'bg-gray-200 hover:bg-gray-100 text-black'
        }  rounded-lg transition-color duration-300`}
        onClick={() => dispatch(removePerformanceWheels())}
      >
        {' '}
        Standard Wheels
      </button>

      <button
        className={`w-full py-4 mb-2 ${
          performanceWheels
            ? 'bg-gray-700 hover:bg-gray-600 hover:text-white text-white '
            : 'bg-gray-200 hover:bg-gray-100 text-black'
        } rounded-lg transition-color duration-300`}
        onClick={() => dispatch(addPerformanceWheels())}
      >
        {' '}
        Performance Wheels (+2,500)
      </button>
    </div>
  )
}
