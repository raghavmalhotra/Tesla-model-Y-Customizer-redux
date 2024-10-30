import {
  ExteriorButtons,
  InteriorButtons,
  WheelButtons,
  Customizations,
} from './'

export const SideBar = () => {
  return (
    <aside className='w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0 z-2'>
      <h1 className='text-5xl text-center font-bold mb-5'>Model Y</h1>
      <h2 className='text-xl text-center font-light'>Customize your car</h2>

      <ExteriorButtons />
      <InteriorButtons />
      <WheelButtons />
      <Customizations />
    </aside>
  )
}
