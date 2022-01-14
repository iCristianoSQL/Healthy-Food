import styled from "styled-components";

/* Libs */
import { Field } from "formik";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5px;
`;

export const Input = styled(Field)`
  font-family: Mulish;
  color: #1d164d;
  width: 55%;
  border-radius: 2rem;
  padding-left: 0.2rem;
`;

export const Label = styled.label`
  font-family: Mulish;
  color: #1d164d;
`;

export const ErrorFeedBack = styled.span`
  font-family: Mulish;
  color: #1d164d;
`;

export const XSpan = styled.span`
  color: red;
`;
