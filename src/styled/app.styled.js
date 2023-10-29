import styled from "styled-components";
import bgImg from "../assets/bg-image.avif";
import Img from "../assets/sign-in-image.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ParentWrapper = styled.div`
  width: 80%;
  height: 90vh;
  background-color: #fff;
  display: flex;
  justify-content: between;
  align-items: center;
  gap: 10px;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const SignInImage = styled.img`
src = ${Img}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* TABLET */
  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  /* MOBILE */
  @media only screen and (max-width: 460px) {
    padding: 10px;
  }
`;

export const ContentWrapper = styled.div`
  width: 525px;
  //   color: #fff;

  h1 {
    font-weight: bold;
    font-size: 50px;
    letter-spacing: -0.52px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
  }

  /* TABLET */
  @media only screen and (max-width: 768px) {
    h1 {
      letter-spacing: -0.29px;
      text-align: center;
      padding: 0 12px;
      margin-bottom: 20px;
    }

    p {
      text-align: center;
    }
  }

  /* MOBILE */
  @media only screen and (max-width: 460px) {
    h1 {
      font-size: 28px;
      letter-spacing: -0.29px;
      text-align: center;
      padding: 0 12px;
      margin-bottom: 20px;
    }

    p {
      text-align: center;
    }
  }
`;

export const LearnCode = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
`;
