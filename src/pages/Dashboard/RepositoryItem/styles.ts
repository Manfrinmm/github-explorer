import styled, { css } from "styled-components";

interface ContainerProps {
  mouseEnter: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  button {
    transition: width 0.2s;
    opacity: 1;

    width: 0;
    border-radius: 3px;

    ${({ mouseEnter }) =>
      mouseEnter &&
      css`
        width: 24px;
      `}

    background: #c53030;
    color: #fff;
  }

  a {
    background: #fff;
    padding: 24px;
    text-decoration: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    flex: 1;

    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;

      margin-left: auto;
    }
  }
`;
