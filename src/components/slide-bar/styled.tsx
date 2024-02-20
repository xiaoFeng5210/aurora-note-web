import Styled from 'styled-components';

const ItemHeight = `28px`

export const selectedStyle = {
  backgroundColor: `#F2F2F1`,
  color: '#37342F'
}

export const SlideBarItem = Styled.li`
overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
height: ${ItemHeight};
line-height: ${ItemHeight};
&:hover {
  background-color: #EDEDEB;
  cursor: pointer;
}
`
