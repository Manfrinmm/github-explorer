import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #a8a8b3;

    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Content = styled.section`
  margin-top: 8rem;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
    }
  }

  > div {
    margin-top: 40px;

    display: flex;

    justify-content: space-between;

    max-width: 650px;
    min-width: 450px;

    div {
      p {
        text-align: center;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 3.6rem;
    line-height: 4.2rem;
    color: #3d3d4d;
  }

  p {
    font-size: 1.8rem;
    color: #737380;
    margin-top: 4px;
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    padding: 24px;
    text-decoration: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    /* flex: 1; */

    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
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
