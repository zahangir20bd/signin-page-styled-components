import { BlockDiv, Button, SemiBold } from "../styled/RememberForgot.styled";

const RefferSignUp = () => {
  return (
    <BlockDiv>
      Don't have an account?
      <Button as="a" href="#">
        <SemiBold>Register Here</SemiBold>
      </Button>
    </BlockDiv>
  );
};

export default RefferSignUp;
