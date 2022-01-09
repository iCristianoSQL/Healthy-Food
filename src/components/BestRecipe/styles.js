import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 5px;
`;

export const GeneralContent = styled.div`
  width: 45%;
  height: 30%;
  display: flex;
  justify-content: space-around;
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
    font-size: 24px;
    width: 200px;
    margin-bottom: 15px;
  }
`;

export const ButtonDiv = styled.button`
  width: 48%;
  height: 17%;
  border: none;

  button:nth-child(1) {
    border: none;
    border-radius: 5px;
    font-family: Mulish;
    background-color: #badc58;
    color: white;
    cursor: pointer;
  }
`;
