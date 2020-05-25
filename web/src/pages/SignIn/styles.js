import styled from 'styled-components';
import { Form } from '@unform/web';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Form)`
  background: #fff;
  border-radius: 4px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 80px;
    margin-top: 10px;
  }

  label {
    margin-top: 25px;
  }

  input {
    width: 300px;
  }

  button {
    width: 100%;
    margin-top: 40px;
    background: #fc8c1b;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    padding: 12px 0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#fc8c1b')};
    }
  }

  a {
    color: #222;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
