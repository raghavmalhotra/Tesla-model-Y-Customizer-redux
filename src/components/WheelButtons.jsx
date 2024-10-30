export const WheelButtons = () => {
  return (
    <div className='mb-8'>
      <h3 className='font-semibold mb-2'>Wheels </h3>
      <button className='w-full py-4 mb-2 bg-gray-700 hover:bg-gray-600 hover:text-white text-white rounded-lg transition-color duration-300'>
        {' '}
        Standard Wheels
      </button>

      <button className='w-full py-4 mb-2 bg-gray-200 hover:bg-gray-600 hover:text-white  rounded-lg transition-color duration-300'>
        {' '}
        Performance Wheels (+2,500)
      </button>
    </div>
  )
}
