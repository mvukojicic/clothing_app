import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import { initialSignInValues, validationSchemaSignIn } from "../settings";
import { TextField } from "@mui/material";
import { Button } from "../../../components/Button";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";

export const SignInForm = () => {

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      actions.resetForm({
        values: {
          email: "",
          password: "",
        },
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('user with that email not found')
          break
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <HeaderWrapper>Already have an account?</HeaderWrapper>
      <span>Sign in with your email and password</span>
      <Formik
        initialValues={initialSignInValues}
        validationSchema={validationSchemaSignIn}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputFieldWrapper>
            <Field name="email">
              {({ field, meta }) => (
                <TextFieldWrapper>
                  <TextField
                    inputProps={{
                      style: { backgroundColor: "lightBlue" },
                    }}
                    fullWidth
                    type="email"
                    label="Email"
                    error={meta.touched && meta.error && true}
                    helperText={meta.touched && meta.error}
                    variant="standard"
                    {...field}
                  />
                </TextFieldWrapper>
              )}
            </Field>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Field name="password">
              {({ field, meta }) => (
                <TextFieldWrapper>
                  <TextField
                    inputProps={{
                      style: { backgroundColor: "lightBlue" },
                    }}
                    fullWidth
                    type="password"
                    label="Password"
                    error={meta.touched && meta.error && true}
                    helperText={meta.touched && meta.error}
                    variant="standard"
                    {...field}
                  />
                </TextFieldWrapper>
              )}
            </Field>
          </InputFieldWrapper>
          <ButtonsContainer>
            <Button type="submit" children="Sign in"></Button>
            <Button
              type="button"
              children="Google sign in"
              buttonType="google"
              onClick={signInWithGoogle}
            ></Button>
          </ButtonsContainer>
        </Form>
      </Formik>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const InputFieldWrapper = styled.div`
  position: relative;
  margin: 45px 0;
`;
const TextFieldWrapper = styled.div`
  padding: 10px 0px 10px 0px;
  margin: 25px 0;
`;

const HeaderWrapper = styled.h2`
  margin: 10px 0;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
