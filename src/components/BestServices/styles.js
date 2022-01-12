import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  margin-top: 45px;
  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 45rem;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 32%;
  gap: 40px;
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1300px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: #1d164d;
  font-family: Montserrat-Bold;
  font-size: 2.1rem;
  @media screen and (max-width: 1300px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  font-family: Mulish;
  color: #9e9baf;
  font-size: 1rems;
`;

export const ButtonDiv = styled.div`
  width: 9.5rem;
  height: 3rem;
  border: none;
  @media screen and (max-width: 1300px) {
    height: 3rem;
  }
  button:nth-child(1) {
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: Mulish;
    background-color: #badc58;
    color: white;
    cursor: pointer;
  }
`;
