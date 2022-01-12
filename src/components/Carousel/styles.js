import styled from "styled-components";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// Component Card
export const ContainerCardBlog = styled.div`
  width: 100%;
  max-width: 21.75rem;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex: none;

  @media screen and (max-width: 768px) {
    max-width: 20rem;
    margin: 0 1rem 0 0;
  }
`;

export const CardBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerCardBlogImage = styled.div`
  display: flex;
`;

export const Image = styled.img``;

export const ContainerCardContent = styled.div`
  padding: 1.7rem 1.7rem 1.7rem 1.2rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem 1.5rem 1rem;
  }
`;

export const TitleCard = styled.h3`
  color: #1d164d;
  font-family: Montserrat-Bold;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;

export const ContainerCardAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AuthorImage = styled(Image)`
  height: 3rem;
  width: 3rem;
  margin-right: 1rem;
`;

export const Author = styled.span`
  font-family: Mulish;
  color: #9e9baf;
`;

/* Component Carousel */
export const ContainerReadBlog = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafc;
  padding: 4rem 0 4rem 2rem;
  max-width: 100vw;

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
