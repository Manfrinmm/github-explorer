import { shade } from "polished";
import styled, { css } from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 450px;

  color: #3a3a3a;

  font-size: 4.8rem;
  line-height: 5.6rem;

  margin-top: 8rem;
`;

export const Form = styled.form<FormProps>`
  margin-top: 4rem;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border-color: #fff;
    transition: border-color 0.6s;
    ${props =>
      props.hasError &&
      css`
        border: 3px solid #c53030;
        border-right: 0;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    border-radius: 0 5px 5px 0;
    background: #04d361;

    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 8rem;
  max-width: 700px;

  div + div {
    margin-top: 16px;
  }
`;
