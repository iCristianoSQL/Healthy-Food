import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-left: 4rem;
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
`;

export const DivButton = styled.div`
  width: 10%;
  height: 45px;
  border: none;
  button:nth-child(1) {
    background-color: #badc58;
    border: none;
    cursor: pointer;
    border-radius: 10%;
    @media screen and (max-width: 1300px) {
      width: 5rem;
    }
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 45px;
  font-family: Mulish;
  font-size: 18px;
  padding-left: 18px;
  &::-webkit-input-placeholder {
    opacity: 0.7;
  }
`;
