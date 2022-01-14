import styled from "styled-components";
import { Form, Field } from "formik";

export const Global = styled.body`
  height: 100vh;
  width: 100vw;
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
`;

export const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: #1d164d;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  ::-webkit-filter: blur(15px);
`;

export const TextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1:nth-child(1) {
    color: #badc58;
    font-size: 32px;
  }
  p:nth-child(2) {
    color: #1d164d;
  }
`;

export const RegisterDiv = styled.div`
  height: 80%;
  width: 30%;
  background-color: white;
  border-radius: 10px;
  box-shadow: #badc58 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, #badc58 10px -10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`;

export const DivButton = styled.div`
  height: 2rem;
  width: 5rem;
  margin-top: 1rem;
  button:nth-child(1) {
    cursor: pointer;
    background-color: #1d164d;
    border: none;
    border-radius: 6px;
    font-family: Mulish;
    color: #badc58;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;
