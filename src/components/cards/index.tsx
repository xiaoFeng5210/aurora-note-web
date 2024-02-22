import { useState, type FC } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { variants, h1Variants, pVariants, buttonVariants, cardVariants } from './animate'
import { CardsContainer } from './styled'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Cards: FC = () => {
  const [hasCards, setHasCards] = useState(false);
  const add = () => {
    setHasCards(false)
  }

  const Tips = () => (
    <motion.div variants={variants} animate="visible" initial="hidden" exit="hidden" className=''>
      <motion.h1 variants={h1Variants} className='tw-text-4xl tw-mb-4'>👏欢迎开始使用极光小记～</motion.h1>
      <motion.div variants={pVariants} className='tw-mb-4 tw-font-[Helvetica]'>
        <motion.p>轻松记录您的想法, 灵感, 知识</motion.p>
        <motion.p>获得简单，自由的卡片笔记感受</motion.p>
        <motion.p>开始新建第一个小记📒吧～</motion.p>
      </motion.div>
      <motion.div variants={buttonVariants}>
        <Button onClick={() => add()}>+ 新建小记</Button>
      </motion.div>
    </motion.div>
  )

  return (
    <div className='tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center'>
      {
        hasCards ?
          <Tips />
          :
          <CardsContainer as={motion.div} variants={cardVariants} initial="hidden" animate="visible" exit="hidden" >
            {
              Array(8).fill(1).map((_, index) => (
                <Card className='tw-cursor-pointer' key={index}>
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>content...</p>
                  </CardContent>
                  {/* <CardFooter className="tw-flex tw-justify-between tw-items-center">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                  </CardFooter> */}
                </Card>
              ))
            }
          </CardsContainer>
      }
    </div>
  )
}
export default Cards
