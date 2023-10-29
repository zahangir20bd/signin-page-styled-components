import styled from "styled-components";

export const Form = styled.form`
  width: 540px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  /* LAPTOP */
  @media only screen and (max-width: 1115px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
