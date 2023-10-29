import { useState } from "react";
import { Input, Wrapper, Error } from "../styled/InputField.styled";

const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, errMsg, onChange, ...inputData } = props;

  const focusHandler = (e) => {
    setFocused(true);
  };

  return (
    <Wrapper>
      <Input
        {...inputData}
        onChange={onChange}
        onBlur={focusHandler}
        focused={focused}
      />
      <Error>{errMsg}</Error>
    </Wrapper>
  );
};

export default InputField;
