import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 0 30px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      margin-right: 30px;
      padding-right: 20px;
      border-right: 1px solid #ddd;
    }
  }
`;

export const PageSelect = styled.div`
  a {
    padding: 0;
    font-weight: bold;
    color: ${(props) => (props.select ? '#000' : '#999')};
    padding-right: 15px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 50px;
    border-radius: 25px;
    margin-right: 25px;
  }

  aside {
    display: flex;
    flex-direction: column;

    span {
      color: #666;
      font-size: 14px;
      font-weight: bold;
    }

    button {
      background: none;
      border: none;
      color: #de3b3b;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
