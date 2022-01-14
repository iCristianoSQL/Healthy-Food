import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-left: 5rem;
  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: #1d164d;
  font-family: Montserrat-Bold;
`;

export const DivInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2%;
  margin-top: 5%;
  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
  @media screen and (max-width: 650px) {
    width: 60%;
  }
`;

export const DivButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  @media screen and (max-width: 650px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  button:nth-child(1) {
    background-color: #badc58;
    border: none;
    cursor: pointer;
    border-radius: 10%;
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 3.4rem;
  font-family: Mulish;
  font-size: 18px;
  padding-left: 18px;
  @media screen and (max-width: 650px) {
    height: 2.5rem;
  }
  &::-webkit-input-placeholder {
    opacity: 0.7;
  }
`;
