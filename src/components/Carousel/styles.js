import styled from "styled-components";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export const ContainerReadBlog = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafc;
  padding: 4rem 0 4rem 2rem;
  max-width: 100vw;
  p:nth-child(2) {
    text-align: center;
    width: 31rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
`;

export const ScrollCardsBlog = styled.section`
  width: 100%;
  position: relative;
  align-self: flex-end;
  margin-top: 3rem;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 1rem 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerArrow = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`;

export const ArrowLeft = styled(ContainerArrow)`
  left: 1.5rem;
`;

export const ArrowRight = styled(ContainerArrow)`
  right: 1.5rem;
`;

export const SVGArrowLeft = styled(BsArrowLeft)`
  width: 2.3rem;
  height: 2.3rem;
  background: #fff;
`;

export const SVGArrowRight = styled(BsArrowRight)`
  width: 2.3rem;
  height: 2.3rem;
  background: #fff;
`;
