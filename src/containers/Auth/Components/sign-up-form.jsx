import { Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { initialSignUpValues, validationSchemaSignUp } from "../settings";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import "./form-input.styles.scss";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { UserContext } from "../../../Context/user.context";
import { useContext } from "react";

export const SignUpForm = () => {
  const { setCurrentUser} = useContext(UserContext);

  const handleSubmit = async (values, actions) => {
    const { email, password, displayName } = values;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      actions.resetForm({
        values: {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("User already exist with the same email!");
      }
      console.log("User creation created an error:", e);
    }
  };

  return (
    <SignUpFormWrapper>
      <HeaderWrapper>Don't have an account?</HeaderWrapper>
      <span>Sign up with your email and password</span>
      <Formik
        initialValues={initialSignUpValues}
        validationSchema={validationSchemaSignUp}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputFieldWrapper>
            <Field name="displayName">
              {({ field, meta }) => (
                <TextFieldWrapper>
                  <TextField
                    fullWidth
                    label="Display Name"
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
            <Field name="email">
              {({ field, meta }) => (
                <TextFieldWrapper>
                  <TextField
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
          <InputFieldWrapper>
            <Field name="confirmPassword">
              {({ field, meta }) => (
                <TextFieldWrapper>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    error={meta.touched && meta.error && true}
                    helperText={meta.touched && meta.error}
                    variant="standard"
                    {...field}
                  />
                </TextFieldWrapper>
              )}
            </Field>
          </InputFieldWrapper>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </SignUpFormWrapper>
  );
};

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

const SignUpFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;
