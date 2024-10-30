import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ImageContainer = () => {
  const currenExteriortColor = useSelector((state) => state.car.exteriorColor)
  const currentInteriorColor = useSelector((state) => state.car.interiorColor)
  const performanceMode = useSelector((state) => state.car.performanceMode)

  useEffect(() => {
    console.log(currenExteriortColor)
  }, [performanceMode])

  return (
    <section className='w-full md:w-3/4'>
      <div className='sticky top-24 '>
        <div className=' h-60 sm:h-96 bg-gray-200 flex item-center justify-center overflow-hidden mb-3'>
          <img
            src={currenExteriortColor}
            alt=''
            className='max-w-full h-auto transform scale-150'
          />
        </div>

        {/* interior */}

        <div className='h-60 sm:h-96 bg-gray-200 flex item-center justify-center overflow-hidden mb-4'>
          <img
            src={currentInteriorColor}
            alt=''
            className='max-w-full h-auto transform scale-150'
          />
        </div>
      </div>
    </section>
  )
}
