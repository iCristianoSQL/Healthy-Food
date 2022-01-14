import styled from "styled-components";

export const Info = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
    width: 20%;
    margin-right: 2.5rem;
  }
`;

export const InfoContent = styled.nav`
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
  }
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
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const DivButton = styled.div`
  height: 2.8rem;
  width: 7.5rem;
  @media screen and (max-width: 330px) {
    margin-left: -5rem;
  }
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
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;
/* Menu Hamburger */
export const MenuHamburger = styled.div`
  @media screen and (max-width: 1000px) {
    background-color: #badc58;
    display: block;
    width: 30px;
    height: 2px;
    position: absolute;
    transition: 0.5s ease-in-out;
    margin: 0 auto;

    &:before,
    &:after {
      content: "";
      background-color: #badc58;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }
    &:before {
      top: -8px;
    }
    &:after {
      bottom: -8px;
    }
  }
`;

export const PositionBurgerDiv = styled.div``;

export const BurgerDiv = styled.div`
  @media screen and (max-width: 1000px) {
    width: 50px;
    height: 50px;
    position: relative;
    background-color: #1d164d;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    z-index: 3;
  }
`;

export const InputChecked = styled.input`
  display: none;
  @media screen and (max-width: 1000px) {
    &:checked ~ label > div > div > div {
      transform: rotate(45deg);
      transition: 0.5s ease-in-out;
      &:before {
        transform: rotate(90deg);
        top: 0px;
        transition: 0.5s ease-in-out;
      }
      &:after {
        transform: rotate(90deg);
        bottom: 0px;
        transition: 0.5s ease-in-out;
      }
    }
    &:checked ~ section {
      transform: translateX(0%);
      transition: 0.5s ease-in-out;
      position: fixed;
      top: 0;
      right: 0;
    }
  }
`;

export const SectionMenu = styled.section`
  @media screen and (max-width: 1000px) {
    background-color: #9e9baf;
    position: fixed;
    z-index: 2;
    width: 350px;
    min-height: 100vh;
    transform: translateX(150%);
    border-radius: 25px 0px 0px 25px;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const MenuLinks = styled.a`
  display: none;
  @media screen and (max-width: 1000px) {
    margin-top: 1.5rem;
    display: block;
    color: #badc58;
    font-family: Mulish;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

export const MenuButton = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
    height: 3.8rem;
    width: 8.5rem;
    button:nth-child(1) {
      border: none;
      border-radius: 6px;
      font-family: Mulish;
      color: #badc58;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
