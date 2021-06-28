import styled from 'styled-components';

export const ContainerCard = styled.div`
  border-radius: 20px;
  background: #F0F0F0;
  padding: 0 22px 0 19px;

  margin-top: 30px;
  height: 275px;

  img{
    height: 60px;
    width: 60px;
    margin-bottom: 30px;
    margin-top: 42px;

  }

  h4{
    color: #454545;
    font-size: 20px;
    font-family: Montserrat;
    line-height: 23px;
    font-weight: medium;
    margin-bottom: 10px;

    @media only screen and (max-width: 575px) {
      font-size: 18px;
    }

  }

  p{
    font-family: Montserrat;
    font-size: 14px;
    color: #454545;
    line-height: 23px;
    margin: 0;
    padding-bottom: 41px;

    @media only screen and (max-width: 575px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
