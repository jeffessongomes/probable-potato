import styled from 'styled-components';

import photoDifferential       from '../../assets/img/foto-diferencial.png';
import photoDifferential_1368  from '../../assets/img/photo.png';
import photoDifferentialTablet from '../../assets/img/foto-diferencial-tablet.png';
import photoDifferentialMobile from '../../assets/img/foto-diferencial-mobile.png';

export const ContainerDifferential = styled.div`
  padding: 0 0 0 405px;

  @media only screen and (max-width: 1400px) {
    padding: 0 0 0 128px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 80px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 37px;
  }

  .change__photo--differential {
    width: 100% !important;
    height: 100% important;
    margin-top: -50px !important;

    @media only screen and (min-width: 1920px) {
      background: url(${photoDifferential});
      background-repeat: no-repeat;
      background-size: cover;

      width: 100% !important;
      height: 100% important;
    }
    @media only screen and (min-width: 1200px) {
      background: url(${photoDifferential_1368});
      background-repeat: no-repeat;
      background-size: cover;

      width: 100% !important;
      height: 100% important;
    }
    @media only screen and (min-width: 700px) {
      background: url(${photoDifferentialTablet});
      background-repeat: no-repeat;
      background-size: cover;

      width: 100% !important;
      height: 100% important;
    }
    @media only screen and (min-width: 359px) {
      background: url(${photoDifferentialMobile});
      background-repeat: no-repeat;
      background-size: cover;

      width: 100% !important;
      height: 500px important;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 40px;

    .photoDifferential{
      padding-top: 75px;
      left: 0 !important;
      width: 100vw !important;
    }

    h2{
      padding-bottom: 0px;
    }
  }

  .gambiarra{
    @media only screen and (max-width: 575px) {
      padding: 0 40px;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 0 !important;
  }

  @media only screen and (max-width: 575px) {
    padding: 0 40px;

    .photoDifferential{
      padding-top: 75px;
      left: 0 !important;
      width: 100vw !important;

    }

    h2{
      padding-bottom: 0px;
    }
  }

  h2{
    font-family: Montserrat;
    font-weight: bold;
    font-size: 45px;
    color: #441F74;
    line-height: 45px;
    margin-bottom: 30px;

    @media only screen and (max-width: 575px) {
      font-size: 30px;
      line-height: 37px;
      margin-bottom: 60px;
    }
  }

  .photoDifferential{
    margin-left: -40px !important;
    object-fit: cover;
    max-height: 100%;
    width: 100vw !important;
    margin-top: -58px;
  }

  .POURACHATADOBARALHO{
    margin-left: 0px !important;
    object-fit: cover;
    max-height: 100%;
    width: 100vw !important;
    margin-top: -58px;
  }

  .photoDifferentialOne{
    display: none !important;

    @media screen and (min-width: 1400px) and (max-width: 8001px) {
      display: block !important;
      width: 100%;
      height: 667px;
      margin-top: -52px;
    }
  }

  .photoDifferentialTwo{
    margin: -58px 0 0 0 !important;
    margin-right: 0px !important;
    width: 100%;
    height: 667px;


    @media only screen and (max-width: 1400px) {
      width: 100%;
      height: 667px;
      display: block !important;
    }
    @media only screen and (max-width: 1024px) {
      display: none !important;
    }
    display: none !important;

  }
`;
