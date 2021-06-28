import styled from 'styled-components';

import BannerImage from '../../assets/img/banner.png';

export const Banner = styled.div`
  z-index: 2;

  background: url(${BannerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;


  display: flex;
  align-items: center;

  padding: 0 200px;
  @media only screen and (max-width: 768px) {
    padding: 0 40px;
  }

  @media only screen and (max-width: 575px) {
    padding: 5px;
  }

  p{
    padding-top: 20px;
    font-family: Montserrat;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 65px;
    line-height: 90px;

    @media only screen and (max-width: 768px) {
      font-size: 45px;
      line-height: 63px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 22px;
      line-height: 39px;
    }
  }

  .icon-left{
    position: absolute;
    bottom: -60px;
    height: 120px;

    @media only screen and (max-width: 768px) {
      height: 86px;
    }

    @media only screen and (max-width: 575px) {
      height: 60px;
      bottom: -30px;
    }
  }

  .icon-right{
    position: absolute;
    height: 232px;
    right: -10px;
    top: -11px;

    @media only screen and (max-width: 768px) {
      height: 155px;
      top: -30px;
      right: 0px;

    }

    @media only screen and (max-width: 575px) {
      height: 94px;
      right: 0px;

    }
  }
`;
