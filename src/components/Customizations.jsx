import { PaymentBreakdown, AccessoriesCheckboxes } from './'

export const Customizations = () => {
  return (
    <>
      <div className='border p-4 mb-8 rounded-lg shadow'>
        <h3 className='font-semibold mb-2'>Full Self-Driving</h3>
        <label className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='full-self-driving-checkbox'
            className='form-checkbox h-5 w-5 text-blue-600'
          />
          <span>Add Full Self-Driving for $8,500</span>
        </label>
      </div>

      {/* Performance Upgrade  */}
      <div className='mb-8'>
        <h3 className='font-semibold mb-2'>Performance Package</h3>
        <button
          id='performance-btn'
          className='w-full py-4 bg-gray-200 hover:bg-gray-400 rounded-lg'
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
