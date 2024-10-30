import {
  ExteriorButtons,
  InteriorButtons,
  WheelButtons,
  Customizations,
} from './'

export const SideBar = () => {
  return (
    <aside className='w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0 z-2'>
      <h1 className='text-2xl md:text-4xl text-center font-bold  mb-2md:mb-5'>
        Model Y
      </h1>
      <h2 className=' text-lg md:text-xl text-center font-light'>
        Customize your car
      </h2>

      <ExteriorButtons />
      <InteriorButtons />
      <WheelButtons />
      <Customizations />
    </aside>
  )
}
