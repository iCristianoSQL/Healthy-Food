import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 370px) {
    align-items: center;
  }
`;

export const DivCopyright = styled.div``;

export const Copyright = styled.p`
  font-size: 1rem;
  font-family: Mulish;
  color: #1d164d;
  @media screen and (max-width: 370px) {
    text-align: center;
  }
`;

export const PrivacyTermsDiv = styled.div`
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 370px) {
    align-items: center;
  }
`;

export const PrivacyTerms = styled.p`
  font-family: Mulish;
  color: #9e9baf;
  font-size: 1rem;
  margin-right: 2rem;
  @media screen and (max-width: 1000px) {
    margin-top: 0.3rem;
  }
  @media screen and (max-width: 370px) {
    text-align: center;
  }
`;
