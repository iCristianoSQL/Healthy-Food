import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  @media screen and (max-width: 1300px) {
    position: relative;
  }
  @media screen and (max-width: 1000px) {
    position: fixed;
    background-color: #9e9baf;
    transition: 0.5s;
    z-index: 10;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 35%;
`;

export const Title = styled.h1`
  font-family: Montserrat-Bold;
  color: #badc58;
  font-size: 2rem;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
