import { useDispatch, useSelector } from 'react-redux'
export const PaymentBreakdown = () => {
  const total = useSelector((state) => state.car.total)
  return (
    <>
      <div className='pt-4'>
        <h3 className='font-semibold text-lg'>Total Price</h3>
        <p id='total-price' className='text-2xl font-bold'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(total)}
        </p>
      </div>

      <div className='border-t pt-4 mt-6'>
        <h3 className='font-semibold text-lg'>Estimated Payment Breakdown</h3>
        <div className='mt-4'>
          <p>
            Down Payment:
            <span id='down-payment' className='font-bold'>
              $5000
            </span>
          </p>
          <p>
            Loan Term: <span className='font-bold'>60 Months</span>
          </p>
          <p>
            Interest Rate: <span className='font-bold'>3% APR</span>
          </p>
          <p>
            Estimated Monthly Payment:
            <span id='monthly-payment' className='font-bold text-2xl'>
              {/* {total - 5000 + ((total - 5000) * 0.03) / 60} */}
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(
                Math.round(
                  ((total - 5000 + (total - 5000) * 0.03) / 60) * 100
                ) / 100
              )}
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
