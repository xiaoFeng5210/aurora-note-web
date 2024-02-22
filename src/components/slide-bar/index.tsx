import { useEffect, type FC } from 'react'
import { SlideBarItem, selectedStyle, SlideBarWrapper } from './styled'
import { useSlideBarStore, setCurrentSelectKey } from '../../store'
import { Button } from "@/components/ui/button"
import { mockData } from './mock.ts'
import { motion } from "framer-motion"
import { variants, itemVariants, logoVariants } from './animate.tsx'

const SlideBar: FC = () => {
  const currentSelectKey = useSlideBarStore((state) => state.currentSelectKey)
  return (
    <div className='tw-w-[300px] tw-h-full tw-bg-[#FBFBFA] tw-px-2'>
      <header className='tw-py-2 tw-w-full tw-inline-flex tw-items-center tw-cursor-pointer'>
        <motion.img variants={logoVariants} whileHover="hover" whileTap="tap" src="/img/aurora_logo_main.png" alt="" width="50px" />
        <span className='tw-ml-2 tw-text-[#6B6A66] tw-text-[1.3rem] tw-font-bold'>Aurora Note</span>
      </header>
      <SlideBarWrapper as={motion.ul} variants={variants} initial="hidden" animate="visible" exit="hidden"
        className='tw-w-full tw-h-full tw-text-[1rem] tw-text-[#6B6A66] tw-text-left'>
        {
          mockData.map((item) => (
            <SlideBarItem
              as={motion.li}
              variants={itemVariants}
              key={item.key}
              style={currentSelectKey === item.key ? selectedStyle : {}}
              onClick={() => setCurrentSelectKey(item.key)}
            >
              {item.title}
            </SlideBarItem>
          ))
        }
      </SlideBarWrapper>
    </div>
  )
}
export default SlideBar
