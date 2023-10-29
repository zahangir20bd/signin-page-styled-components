import {
  Button,
  ContentContainer,
  Wrap,
} from "../styled/RememberForgot.styled";

const AgreeTermsConditions = () => {
  return (
    <ContentContainer>
      <Wrap>
        <input type="checkbox" name="" id="" />
        <span>
          Agree to{" "}
          <Button as="a" href="#">
            Terms & Conditions
          </Button>
        </span>
      </Wrap>
    </ContentContainer>
  );
};

export default AgreeTermsConditions;
