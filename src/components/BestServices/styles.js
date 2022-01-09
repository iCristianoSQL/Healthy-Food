import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  margin-top: 45px;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Content = styled.div`
  width: 32%;
  gap: 40px;
  margin-top: 105px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #1d164d;
  font-family: Montserrat-Bold;
  font-size: 35px;
`;

export const Paragraph = styled.p`
  font-family: Mulish;
  color: #9e9baf;
  font-size: 16px;
`;

export const ButtonDiv = styled.div`
  width: 33%;
  height: 9%;
  border: none;
  button:nth-child(1) {
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-family: Mulish;
    background-color: #badc58;
    color: white;
    cursor: pointer;
  }
`;
