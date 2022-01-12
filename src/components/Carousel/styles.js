import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextDiv = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0px;
`;

export const Image = styled.img``;

export const Figure = styled.div`
  margin: 0 1.5rem;
  box-shadow: 0 7px 29px 0 hsl(240deg 5% 41% / 20%);
`;

export const Legend = styled.h3`
  color: #1d164d;
  font-family: Montserrat-Bold;
  font-size: 25px;
  text-align: start;
  margin-top: 10px;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 5px;
  margin-top: 10px;
`;

export const ProfileImage = styled.img``;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-family: Mulish;
  color: #9e9baf;
  font-size: 16px;
`;

export const Containercarousel = styled(Carousel)`
  div:nth-child(1) {
    margin: 0 0.6rem;
    border-radius: 10px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
