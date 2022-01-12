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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ArticleContent = styled.article`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.5rem;
  margin-left: 3.5rem;
`;

export const GeneralContent = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-around;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  @media screen and (max-width: 1920px) {
    width: 35%;
  }
`;

export const ImageDiv = styled.div`
  width: 40%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContentDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1:nth-child(1) {
    font-size: 1.5rem;
    width: 200px;
    margin-bottom: 15px;
  }
`;

export const ButtonDiv = styled.div`
  width: 48%;
  height: 17%;
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
