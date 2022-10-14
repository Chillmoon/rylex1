import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Minimum length should be 3")
    .max(20, "It`s too long")
    .required("Required"),
  password: Yup.string()
    .min(8, "Minimum length should be 8")
    .max(32, "It`s too long")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain one uppercase, one lowercase, one number and one special symbol"
    ),
});

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Password minimum length should be 3")
    .max(20, "It`s too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password minimum length should be 8")
    .max(32, "It`s too long")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain one uppercase, one lowercase, one number and one special symbol"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Required"),
});

export const ModalTenantsSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Password minimum length should be 3")
    .max(20, "It`s too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  type: Yup.string()
    .matches(
      /(Enterprise|ServiceProvider)/,
      "Please enter Enterprise or ServiceProvider",
      {
        excludeEmptyString: true,
      }
    )
    .required("Required"),
  name: Yup.string(),
  phoneNumber: Yup.string(),
  emailContact: Yup.string().email("Invalid email"),
  zipCode: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  city: Yup.string(),
});

export const ModalCallConnectSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  name: Yup.string(),
  phoneNumber: Yup.string(),
  emailContact: Yup.string().email("Invalid email"),
  zipCode: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  city: Yup.string(),
});
