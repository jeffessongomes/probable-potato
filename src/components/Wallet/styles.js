import styled from 'styled-components';

export const ContainerWallet = styled.div`
  padding: 0 200px;

  @media only screen and (max-width: 768px) {
    padding: 0 40px;
  }

  h2{
    font-family: Montserrat;
    font-weight: bold;
    line-height: 55px;
    font-size: 45px;
    color: #441F74;
    margin-top: 120px;
    margin-bottom: 60px;

    @media only screen and (max-width: 575px) {
      font-size: 30px;
      line-height: 37px;
      margin-bottom: 30px;
      margin-top: 60px;
    }

  }

  p{
    font-family: Montserrat;
    color: #707070;
    font-size: 18px;
    line-height: 34px;
    margin: 0;

    @media only screen and (max-width: 575px) {
      font-size: 12px;
      line-height: 22px;
    }
  }

  .walletImg{
    @media only screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img{
      margin-top: 60px;
      width: 120% !important;
      height: 120% !important;

      @media only screen and (max-width: 575px) {
        height: 372px;
        margin-bottom: 50px;
      }
    }
  }
`;
