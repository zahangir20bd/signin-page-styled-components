import styled from "styled-components";
import bgImg from "../assets/bg-image.avif";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const ParentWrapper = styled.div`
  width: 80%;
  height: 90vh;
  background-color: #fff;
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 20px;

  border-radius: 20px;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    gap: 2rem;
    overflow-y: scroll;
    border-radius: 0px;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px #ededed;
  margin: 10px;
  padding: 50px 10px;
  border-radius: 20px;

  /* Tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: between;
  align-items: center;

  //   /* TABLET */
  //   @media only screen and (max-width: 768px) {
  //     width: 100%;
  //     justify-content: center;
  //     align-items: center;
  //   }

  //   /* MOBILE */
  //   @media only screen and (max-width: 460px) {
  //     // padding: 10px;
  //   }
`;
