import styled from "styled-components";

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
