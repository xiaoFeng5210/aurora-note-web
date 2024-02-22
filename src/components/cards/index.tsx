import type { FC } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import {variants, h1Variants, pVariants, buttonVariants} from './animate'

const Cards: FC = () => {

  const Tips = () => (
    <motion.div variants={variants} animate="visible" initial="hidden" exit="hidden" className=''>
      <motion.h1 variants={h1Variants} className='tw-text-4xl tw-mb-4'>👏欢迎开始使用极光小记～</motion.h1>
      <motion.div variants={pVariants} className='tw-mb-4 tw-font-[Helvetica]'>
        <motion.p>轻松记录您的想法, 灵感, 知识</motion.p>
        <motion.p>获得简单，自由的卡片笔记感受</motion.p>
        <motion.p>开始新建第一个小记📒吧～</motion.p>
      </motion.div>
      <motion.div variants={buttonVariants}>
        <Button>+ 新建小记</Button>
      </motion.div>
    </motion.div>
  )

  return (
    <div className='tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center'>
      <Tips />
    </div>
  )
}
export default Cards
