import { useState } from "react";
import { Form, Wrapper, Terms } from "../styled/Form.styled";

import InputField from "./InputField";
import { inputData } from "../data";
import LoginButton from "./LoginButton";

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

      <Wrapper>
        <LoginButton />
      </Wrapper>
    </Form>
  );
};

export default FormBox;