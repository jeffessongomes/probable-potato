import styled from 'styled-components';

export const Foot = styled.footer`
  padding: 0 405px;

  @media only screen and (max-width: 1400px) {
    padding: 0 0 0 128px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 80px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 37px;
  }

  .logozinha{
    display: flex;
    align-items: center;
    @media only screen and (max-width: 575px) {
      justify-content: center;
    }
  }

  margin-top: 48px;
  margin-bottom: 37px;

  width: 100%;

  .left--text{
    display: flex;
    align-items: center;

    img{
      height: 27px;
      margin-right: 50px;

      @media only screen and (max-width: 575px) {
        margin: 30px 0 20px 0;
      }
    }

    p{
      font-size: 11;
      line-height: 22px;
      font-family: Montserrat;
      font-weight: medium;
      color: #454545;
      margin: 0;

      @media only screen and (max-width: 575px) {
        text-align: center;
        margin-bottom: 20px;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      img{
        margin-bottom: 20px;
      }
    }

    @media only screen and (max-width: 575px) {
      align-items: center;
    }
  }



  ul{
    display: flex;
    list-style: none;
    margin: 0;

    @media only screen and (max-width: 575px) {
      align-items: center;
    }

    li{
      padding: 0 10px;

      @media only screen and (max-width: 575px) {
        padding: 0 13px;
      }

      a{
        text-decoration: none;
      }
    }
  }
`;
