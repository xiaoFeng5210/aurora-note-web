import styled from "styled-components";
import {motion} from "framer-motion";

export const CardsContainer =  styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: .5rem;
  /* 滚动条样式消失 */
  scrollbar-width: none;
`
