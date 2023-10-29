import {
  Button,
  ContentContainer,
  Wrap,
} from "../styled/RememberForgot.styled";

const RememberForgot = () => {
  return (
    <ContentContainer>
      <Wrap>
        <input type="checkbox" name="" id="" />
        <span>Remember me</span>
      </Wrap>
      <Button as="a" href="#">
        Change Password
      </Button>
    </ContentContainer>
  );
};

export default RememberForgot;
