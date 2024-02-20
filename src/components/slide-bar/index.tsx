import { useEffect, type FC } from 'react'
import { SlideBarItem } from './styled'
const SlideBar: FC = () => {
  return (
    <div className='tw-w-[300px] tw-h-full tw-bg-[#FBFBFA] tw-px-2'>
      <header className='tw-h-[37px]'>标题</header>
      <ul className='tw-w-full tw-h-full tw-text-[1rem] tw-text-[#6B6A66] tw-text-left'>
        <SlideBarItem className='tw-h-[27px] tw-leading-[27px]'>测试测试测试测试测试测试测试测试测试测试测试测试</SlideBarItem>
        <SlideBarItem className='tw-h-[27px]'>测试测试测试。。。。。</SlideBarItem>
      </ul>
    </div>
  )
}
export default SlideBar
