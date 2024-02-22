import type { FC } from 'react'
import SlideBar from '@/components/slide-bar'
import Cards from '@/components/cards'

const Home: FC = () => {
  return (
    <div className='tw-w-screen tw-h-dvh tw-overflow-hidden tw-flex tw-flex-row'>
      <SlideBar />
      <main className='tw-flex-1 tw-p-4 tw-flex tw-flex-col'>
        <header className='tw-p-2'>
          头部区域
        </header>
        <Cards />
      </main>
    </div>
  )
}
export default Home
