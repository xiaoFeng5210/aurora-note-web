import { type FC } from 'react'
import SlideBar from '@/components/slide-bar'
import { Outlet } from 'react-router-dom'

const Home: FC = () => {

  return (
    <div className='tw-w-screen tw-h-dvh tw-overflow-hidden tw-flex tw-flex-row'>
      <SlideBar />
      <main className='tw-flex-1 tw-p-4 tw-flex tw-flex-col'>
        <Outlet />
      </main>
    </div>
  )
}
export default Home
