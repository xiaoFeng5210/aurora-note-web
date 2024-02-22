import type { FC } from 'react'
const Cards: FC = () => {

  const Tips = () => (
    <div className=''>
      <h1 className='tw-text-4xl'>👏欢迎开始使用</h1>
      <div>
        <p>开始新建第一个小记📒吧～</p>
      </div>
    </div>
  )

  return (
    <div className='tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center'>
      <Tips />
    </div>
  )
}
export default Cards
