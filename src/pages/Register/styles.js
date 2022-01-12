import styled from "styled-components";

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
  box-shadow: 2px 2px 2px 1px black;
`;

export const Global = styled.body`
  height: 100vh;
  width: 100vw;
`;
