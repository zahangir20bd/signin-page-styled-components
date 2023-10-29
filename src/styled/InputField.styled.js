import styled from "styled-components";
import errorSVG from "../assets/icon-error.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 0px 20px;
`;

export const Error = styled.span`
  text-align: right;
  color: #ff7979;
  font-size: 13px;
  font-style: italic;
  display: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 5px 25px;
  font-size: 16px;
  font-weight: 600;
  color: #3d3b48;
  border-radius: 5px;
  border: 1px #dedede solid;

  &:invalid ~ ${Error} {
    display: ${(props) => props.focused && "block"};
  }

  &:invalid {
    border: ${(props) => props.focused && "2px red solid"};
    background: ${(props) => props.focused && `url(${errorSVG}) no-repeat`};
    background-position: bottom 15px right 20px;
  }

  &:valid {
    border: 2px #0369a1 solid;
  }

  &:focus {
    outline: 2px solid transparent;
  }
`;
