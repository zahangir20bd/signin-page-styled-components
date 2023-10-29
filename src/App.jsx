import {
  Container,
  ParentWrapper,
  LeftSide,
  RightSide,
  Wrapper,
} from "./styled/app.styled";
import img from "./assets/sign-in-image.png";
import FormBox from "./components/FormBox";
import { Heading } from "./styled/Heading.styled";

function App() {
  return (
    <Container>
      <ParentWrapper>
        <LeftSide>
          <img id="login-image" src={img} alt="" />
        </LeftSide>
        <RightSide>
          <Wrapper>
            <Heading>Log In</Heading>
            <FormBox />
          </Wrapper>
        </RightSide>
      </ParentWrapper>
    </Container>
  );
}

export default App;
