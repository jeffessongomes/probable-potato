import styled from 'styled-components';

import background from '../../assets/img/bg.png';
import bgTablet from '../../assets/img/bg-tablet.png';

export const FormContainer = styled.div`
  padding: 100px 405px 80px 405px;
  margin-top: 80px;

  @media only screen and (max-width: 1400px) {
    padding: 0 0 0 128px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 80px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 37px;
  }

  .cell--Form{

    @media only screen and (max-width: 768px){
      height: 440px;
    }
    @media only screen and (max-width: 576px){
      height: 260px;
    }
  }

  background: url(${background});
  @media only screen and (max-width: 768px) {
    background: url(${bgTablet});

    .img__form--cell{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #FFFFFF;
    }
  }

  .a_mimir{
    color: #454545;
    font-size: 14px !important;
    text-align: center;
    margin-top: 42px;
    line-height: 24px;
    font-family: Montserrat;
    padding: 0;
    margin-bottom: 60px;
  }

  @media only screen and (max-width: 768px){
    .a_mimir{
      color: #454545;
      font-size: 35px !important;
      text-align: center;
      margin-top: 30px;
      line-height: 24px;
      font-family: Montserrat;
      padding: 0;
      margin-bottom: 60px;
    }
  }

  @media only screen and (max-width: 576px){
    .a_mimir{
      color: #454545;
      font-size: 28px !important;
      text-align: center;
      margin-top: 30px;
      line-height: 24px;
      font-family: Montserrat;
      padding: 0;
      margin-bottom: 60px;
    }
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  `;

  export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    color: #454545;
    font-size: 35px;
    padding: 60px 0 0 0;
    font-family: Montserrat;
  }

  background: #FFFFFF;
  padding: 0 45px;

  @media only screen and (max-width: 1400px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 768px) {
    min-height: 770px;
    padding: 0 80px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 37px;
  }

  .p-lorem{
    color: #707070;
    font-size: 14px;
    text-align: center;
    margin-top: 30px;
    line-height: 24px;
    font-family: Montserrat;
    padding: 0 20px;
    margin-bottom: 60px;
  }

  .btn--continue{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    font-family: Montserrat;
    color: #FFFFFF;
    background: #441F74;
    width: 100%;
    border-radius: 15px;
    padding: 22px 0;
    margin-top: 50px;

    &:hover{
      text-decoration: none;
    }

    @media only screen and (max-width: 576px){
      padding: 15px 0;
    }
  }


  .formContent{
    display: flex;
    flex-direction: column;

    width: 100%;

    .input-data {
      margin-top: 50px;
      height: 40px;
      width: 100%;
      position: relative;
      font-size: 18px;
      flex: 1;

      input {
        height: 100%;
        width: 100%;
        border: none;
        border-bottom: 2px solid #dddddd;
        font-size: 14px;
        color: #6F6F6F;

        &:focus{
          outline: none;
          border-bottom: 2px solid #441F74;
        }
        &:focus ~ label {
          transform: translateY(-20px);
          font-size: 12px;
          color: #666666;

          @media only screen and (max-width: 576px){
            font-size: 8px
          }
        }
        &:valid ~ label{
          transform: translateY(-20px);
          font-size: 12px;
          color: black;

          @media only screen and (max-width: 576px){
            font-size: 8px
          }
        }
      }

      label {
        position: absolute;
        bottom: 0px;
        left: 0;
        color: #454545;
        pointer-events: none;
        transition: all 0.3s ease;
        font-size: 18px;
        font-family: Montserrat;
        font-weight: medium;
        line-height: 22px;

        @media only screen and (max-width: 576px){
          font-size: 12px;
        }
      }
    }
  }
`;

export const Verify = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-family: Montserrat;
    font-weight: medium;
    font-size: 35px;
    line-height: 43px;
    color: #454545;
    margin-bottom: 50px;
  }

  p{
    font-family: Montserrat;
    line-height: 24px;
    font-size: 14px;
    color: #707070;
    text-align: center;
    margin-bottom: 70px;
  }

  span{
    font-family: Montserrat;
    font-size: 18px;
    line-height: 22px;
    color: #454545;
    font-weight: 600;
  }

  .verify--input{
    display: flex;
    justify-content: center;
    margin-top: 30px;

    div{
      width: 100% !important;

      div{
        width: 100%;

        input{
          font-family: Montserrat;
          border: 1px solid #707070;
          margin: 0 8px;

          border-radius: 10px;

          width: 53px !important;
          height: 70px !important;

          @media only screen and (max-width: 576px){
            margin: 0 1px;
            height: 50px !important;
            width: 40px !important;
          }


          caret-color: #441F74;

          &:focus{
            border-color: #441F74;
          }

          &:first-child{
            border-radius: 10px;
            margin-left: 0;
          }
          &:last-child{
            border-radius: 10px;
            margin-right: 0;
          }
        }
      }
    }
  }
`;

export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-family: Montserrat;
    font-size: 35px;
    line-height: 43px;
    font-weight: medium;
    color: #454545 !important;
    text-align: center;
  }

  img{
    margin-top: 60px;
    margin-bottom: 30px;
  }
`;
