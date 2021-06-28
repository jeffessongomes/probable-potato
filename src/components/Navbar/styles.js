import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 48px;

  position: absolute;
  width: 98%;

  padding: 0 200px;

  @media only screen and (max-width: 768px) {
    padding: 0 40px;
    justify-content: center;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 40px;
    justify-content: center;

    position: absolute;
    width: 95%;
  }

  img{
    height: 60px;

    @media only screen and (max-width: 768px) {
      height: 44px;
    }

    @media only screen and (max-width: 575px) {
      height: 40px;
    }
  }

  ul{
    display: flex;
    list-style: none;
    margin: 0;

    @media only screen and (max-width: 768px) {
      display: none;
    }

    li{
      padding: 0 10px;
      a{
        text-decoration: none;
      }
    }
  }
`;
