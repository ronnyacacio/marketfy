import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    height: 40px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 12px 15px;
    color: #444;

    &:focus {
      border-color: #fc8c1b;
      box-shadow: 0 0 0 1px #fc8c1b;
    }

    &:placeholder {
      color: #aaa;
    }
  }
`;
