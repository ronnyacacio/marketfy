import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  min-width: 200px;
  word-wrap: break-word;

  strong {
    font-size: 16px;
    color: #444;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    margin-bottom: 5px;
    color: #666;
  }

  img {
    margin-top: 10px;
    width: 200px;
    height: 200px;
    align-self: center;
  }
`;
