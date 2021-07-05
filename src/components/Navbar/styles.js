import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 200;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 48px 405px 0 405px;

  img{
    height: 60px;
    width: 233px;
  }

  ul{
    display: flex;
    list-style: none;

    li{
      padding: 0 10px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 48px 153px 0 128px;

    img{
      height: 60px;
      width: 233px;
    }
  }

  @media only screen and (max-width: 768px){
    padding: 46px 0 0 0;
    justify-content: center;

    img{
      width: 173px;
      height: 44px;
    }

    ul{
      display: none;
    }
  }

  @media only screen and (max-width: 576px){
    padding: 40px 0 0 0;

    img{
      height: 40px;
      width: 158px;
    }
  }
`;
