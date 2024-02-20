import { useEffect, type FC } from 'react'
import { SlideBarItem, selectedStyle } from './styled'
import { useSlideBarStore, setCurrentSelectKey } from '../../store'
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
      <header className='tw-h-[37px]'>标题</header>
      <ul className='tw-w-full tw-h-full tw-text-[1rem] tw-text-[#6B6A66] tw-text-left'>
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
      </ul>
    </div>
  )
}
export default SlideBar
