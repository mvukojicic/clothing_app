import { SignUpForm } from "./Components/sign-up-form";
import { SignInForm } from "./Components/sign-in-form";
import styled from "styled-components";

const SignIn = () => {
  return (
    <UserPageWrapper>
      <SignInForm />
      <SignUpForm />
    </UserPageWrapper>
  );
};

const UserPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
`;
export default SignIn;
