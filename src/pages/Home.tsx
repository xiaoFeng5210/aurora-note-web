import type { FC } from 'react'
import SlideBar from '@/components/slide-bar'
import Cards from '@/components/cards'

const Home: FC = () => {
  return (
    <div className='tw-w-screen tw-h-dvh tw-overflow-hidden tw-flex tw-flex-row'>
      <SlideBar />
      <main className='tw-flex-1 tw-p-4'>
        <Cards />
      </main>
    </div>
  )
}
export default Home
