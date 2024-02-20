import { useEffect, type FC } from 'react'
import { SlideBarItem, selectedStyle, SlideBarWrapper } from './styled'
import { useSlideBarStore, setCurrentSelectKey } from '../../store'
import { Button } from "@/components/ui/button"

const SlideBar: FC = () => {
  const currentSelectKey = useSlideBarStore((state) => state.currentSelectKey)
  const mockData = [
    {
      key: '1',
      title: '测试测试测试测试测试测试测试测试测试测试测试测试'
    },
    {
      key: '2',
      title: '测试22333333'
    }
  ]
  return (
    <div className='tw-w-[300px] tw-h-full tw-bg-[#FBFBFA] tw-px-2'>
      <header className='tw-py-2'>
        <Button className='w-full'>新增</Button>
      </header>
      <SlideBarWrapper className='tw-w-full tw-h-full tw-text-[1rem] tw-text-[#6B6A66] tw-text-left'>
        {
          mockData.map((item) => (
            <SlideBarItem
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
