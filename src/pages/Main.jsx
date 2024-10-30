import { ImageContainer, SideBar } from '../components'
export const Main = () => {
  return (
    <main className='flex flex-col md:flex-row justify-between px-4 md:px-10 py-6'>
      <ImageContainer />
      <SideBar />
    </main>
  )
}
