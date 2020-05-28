import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 20px;
  strong {
    color: #fff;
    font-size: 40px;
    margin: 0 80px;
  }
`;

export const Actions = styled.div`
  margin: 20px 80px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    width: 240px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    input {
      width: 200px;
      height: 36px;
      font-size: 14px;
      border: none;
      margin-left: 8px;
    }
  }

  button {
    display: flex;
    align-items: center;
    background: #fff;
    border: none;
    border-radius: 4px;
    color: #555;
    font-weight: bold;
    padding: 3px 10px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#fff')};
    }
  }
`;

export const ProductList = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 0 80px;

    strong {
      margin: 0;
      font-size: 16px;
    }
  }
`;

export const ProductItem = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: left;
  padding: 0 30px;
  border-radius: 4px;
  margin-bottom: 20px;

  span {
    font-size: 16px;
    padding: 20px 0;
    color: #444;
    font-weight: 500;
  }

  div {
    background: blue;
    width: 80px;
    display: flex;
    align-items: center;
    img {
      height: 40px;
      border-radius: 20px;
    }
  }
`;
