import styled from "styled-components";

export const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1000px) {
    padding-top: 7rem;
  }

  h2:nth-child(1) {
    width: 80%;
    font-size: 3rem;
    @media screen and (max-width: 1920px) {
      width: 40rem;
    }
    @media screen and (max-width: 1571px) {
      width: 85%;
    }
    @media screen and (max-width: 1310px) {
      width: 90%;
    }
    @media screen and (max-width: 1300px) {
      text-align: center;
      width: 100%;
    }
  }
  input:nth-child(1) {
    max-width: 25rem;
  }
  section:nth-child(1) {
    @media screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }
  }
`;

export const Image = styled.img`
  width: 55rem;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Search = styled.img``;
