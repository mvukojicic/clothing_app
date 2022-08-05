import * as Yup from "yup";

export const initialSignUpValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const initialSignInValues = {
  email: "",
  password: "",
}


export const validationSchemaSignIn = Yup.object({
  email: Yup.string("Enter your email")
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters")
    .required("Password is required"),
})

export const validationSchemaSignUp = Yup.object({
  email: Yup.string("Enter your email")
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
