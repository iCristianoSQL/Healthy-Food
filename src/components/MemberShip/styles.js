import styled from "styled-components";

export const Section = styled.section`
  margin-top: 8%;
  width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  h2:nth-child(1) {
    font-size: 2.5rem;
    width: 75%;
  }

  }
  input:nth-child(1) {
    width: 65%;
    height: 55px;
    @media screen and (max-width: 1920px) {
      width: 45%;
    }
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
