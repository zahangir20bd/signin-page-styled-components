import { useState } from "react";
import { Form, Wrapper } from "../styled/Form.styled";

import InputField from "./InputField";
import { inputData } from "../data";
import LoginButton from "./LoginButton";
import RememberForgot from "./RememberForgot";
import AgreeTermsConditions from "./AgreeTermsConditions";
import RefferSignUp from "./RefferSignUp";

const FormBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // onSubmit Handler Function
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Login success!");
  };

  //onChange Handler Function
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={submitHandler}>
      {inputData.map((input) => {
        return (
          <InputField
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={changeHandler}
          />
        );
      })}

      <RememberForgot />
      <AgreeTermsConditions />
      <Wrapper>
        <LoginButton />
      </Wrapper>
      <RefferSignUp />
    </Form>
  );
};

export default FormBox;
