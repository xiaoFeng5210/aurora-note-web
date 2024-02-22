export const mockData = [
  {
    key: '1',
    title: '测试测试测试测试测试测试测试测试测试测试测试测试'
  },
  {
    key: '2',
    title: '测试22333333'
  },
  // 再给我来好多条类似上面的数据测试
  {
    key: '3',
    title: '测试22333333'
  },
  {
    key: '4',
    title: '测试22333333'
  },
  {
    key: '5',
    title: '测试22333333'
  },
  {
    key: '6',
    title: '测试22333333'
  },
  {
    key: '7',
    title: '测试22333333'
  },
  {
    key: '8',
    title: '测试22333333'
  },
  {
    key: '9',
    title: '测试22333333'
  },
  {
    key: '10',
    title: '测试22333333'
  },
  {
    key: '11',
    title: '测试22333333'
  },
  {
    key: '12',
    title: '测试22333333'
  },
  {
    key: '13',
    title: '测试22333333'
  },
  {
    key: '14',
    title: '测试22333333'
  },
  {
    key: '15',
    title: '测试22333333'
  },
  {
    key: '16',
    title: '测试22333333'
  },
  {
    key: '17',
    title: '测试22333333'
  },
  {
    key: '18',
    title: '测试22333333'
  },
  {
    key: '19',
    title: '测试22333333'
  },
  {
    key: '20',
    title: '测试22333333'
  },
  {
    key: '21',
    title: '测试22333333'
  },
  {
    key: '22',
    title: '测试22333333'
  },
  {
    key: '23',
    title: '测试22333333'
  },
  {
    key: '24',
    title: '测试22333333'
  },
  {
    key: '25',
    title: '测试22333333'
  },
  {
    key: '26',
    title: '测试22333333'
  },
  {
    key: '27',
    title: '测试22333333'
  },
  {
    key: '28',
    title: '测试22333333'
  },
]

function testMock() {
  mockData.forEach((item: any) => {
    item.markdown = `${item.key} ${item.title} markdown content`
  })
}

testMock()
