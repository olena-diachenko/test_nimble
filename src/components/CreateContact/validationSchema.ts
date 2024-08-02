import * as yup from "yup";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Incorrect format. Please check entered email")
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email")
    .required("Enter email address"),
});

export default validationSchema;
