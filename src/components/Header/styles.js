import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  @media screen and (max-width: 1300px) {
    position: relative;
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
`;

export const Info = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Links = styled.a`
  color: #ffffff;
  font-family: Mulish;
  font-size: 1rem;
  margin-right: 2rem;
  text-decoration: none;
  text-align: center;
  @media screen and (max-width: 1300px) {
    color: #badc58;
    font-weight: 700;
  }
`;

export const InfoContent = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1920px) {
    width: 45%;
  }
  @media screen and (max-width: 1752px) {
    width: 60%;
    margin-left: 5rem;
  } ;
`;

export const DivButton = styled.div`
  height: 2.8rem;
  width: 7.5rem;
  button:nth-child(1) {
    border: none;
    border-radius: 6px;
    font-family: Mulish;
    color: #badc58;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    @media screen and (max-width: 1300px) {
      background-color: #badc58;
      color: white;
    }
  }
`;
