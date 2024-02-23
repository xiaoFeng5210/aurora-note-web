import { type FC } from 'react'
import SlideBar from '@/components/slide-bar'
import { Outlet } from 'react-router-dom'
import { useSlideBarStore } from '@/store'
import { motion } from 'framer-motion'

const Home: FC = () => {
  const isShowSlideBar = useSlideBarStore((state) => state.isShowSlideBar)
  return (
    <div className='tw-w-screen tw-h-dvh tw-overflow-hidden tw-flex tw-flex-row'>
      <SlideBar />
      <main className="tw-flex-1">
        
        <motion.div layout className='tw-p-4'>
          <Outlet />
        </motion.div>
      </main>

    </div>
  )
}
export default Home
