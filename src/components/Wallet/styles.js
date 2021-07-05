import styled from 'styled-components';

export const ContainerWallet = styled.div`
  padding: 0 0 0 405px;

  @media only screen and (max-width: 1400px) {
    padding: 0 128px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 80px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 37px;
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
      width: 100%;
      max-height: 547px;
      object-fit: contain;

      @media only screen and (max-width: 575px) {
        height: 372px;
        margin-bottom: 50px;
      }
    }
  }
`;
