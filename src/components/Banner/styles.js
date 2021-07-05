import styled from 'styled-components';

import BannerImage from '../../assets/img/bannerdesktop.png';
import BannerMobile from '../../assets/img/banner.png';

export const Banner = styled.div`
  z-index: 2;

  background: url(${BannerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0 0 405px;

  @media only screen and (max-width: 1400px) {
    padding: 0 0 0 128px;
    background: url(${BannerImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 0 0 80px;
    font-size: 45px;
    line-height: 63px;
    background: url(${BannerImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

  }

  @media only screen and (max-width: 576px) {
    padding: 0 0 0 37px;
    font-size: 22px;
    line-height: 39px;
    background: url(${BannerMobile});
    background-position: center;
    background-size: cover;
  }

  p{
    padding-top: 120px;
    font-family: Montserrat;
    font-weight: bold;
    color: #FFFFFF;
    font-size: 65px;
    line-height: 90px;
    padding-right: 230px;


    @media only screen and (max-width: 1400px) {
      font-size: 45px;
      line-height: 60px;
      padding-right: 230px;
    }

    @media only screen and (max-width: 768px) {
      padding-right: 0px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 22px;
      line-height: 39px;
      padding-right: 0px;
    }
  }

  .icon-left{
    position: absolute;
    bottom: -60px;
    height: 120px;

    @media only screen and (max-width: 1400px) {
      position: absolute;
      height: 119px;
      bottom: -60px;
    }

    @media only screen and (max-width: 768px) {
      height: 86px;
      bottom: -40px;
    }

    @media only screen and (max-width: 576px) {
      height: 60px;
      bottom: -27px;
    }
  }

  .icon-right{
    position: absolute;
    height: 252px;
    right: 300px;
    top: -70px;

    @media only screen and (max-width: 1400px) {
      position: absolute;
      height: 208px;
      top: -80px;
      right: 110px;
    }

    @media only screen and (max-width: 768px) {
      height: 155px;
      top: -30px;
      right: 20px;
    }

    @media only screen and (max-width: 575px) {
      height: 94px;
      right: 15px;
    }
  }
`;
