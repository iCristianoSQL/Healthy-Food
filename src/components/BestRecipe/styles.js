import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1300px) {
    margin-top: 3rem;
  }
`;

export const TitleDiv = styled.div`
  margin: 25px 0px 25px 0px;
  gap: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div:nth-child(1) {
    width: 100%;
  }
  p:nth-child(2) {
    max-width: 39.75rem;
  }
`;

export const ArticleContent = styled.article`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.5rem;
  margin-left: 3.5rem;
  @media screen and (max-width: 1920px) {
    padding: 0px 70px;
  }
  @media screen and (max-width: 1830px) {
    padding: 0 20px;
  }
`;

export const GeneralContent = styled.div`
  border-radius: 7px;
  box-shadow: 0 8px 24px hsl(210deg 8% 62% / 20%);
  display: flex;
  max-width: 35rem;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 630px) {
    max-width: 30rem;
  }
  @media screen and (max-width: 560px) {
    max-width: 27rem;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 50%;
  /* width: 40%; */
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 50%;

  h1:nth-child(1) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

export const ButtonDiv = styled.div`
  width: 7.5rem;
  height: 3.5rem;
  border: none;

  button:nth-child(1) {
    border: none;
    border-radius: 5px;
    font-family: Mulish;
    font-size: 1rem;
    background-color: #badc58;
    color: white;
    cursor: pointer;
  }
`;
