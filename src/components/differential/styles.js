import styled from 'styled-components';

export const ContainerDifferential = styled.div`
  padding: 0 0 0 200px;

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
    height: 105%;
    width: 100%;
    margin-top: -58px;
  }
`;
