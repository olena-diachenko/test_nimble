import React from "react";
import { Box, Button, InputLabel, Typography } from "@mui/material";
import { useFormik } from "formik";
import initialValues from "./constants";
import styles from "./CreateContact.styled";
import IFormValues from "./types";
import MainInput from "../MainInput/MainInput";
import validationSchema from "./validationSchema";

const CreateContact = () => {
  const formik = useFormik<IFormValues>({
    initialValues,
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={styles.container}>
      <Typography variant="h2" component="h2" sx={styles.heading}>
        Create contact
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <MainInput
          formik={formik}
          type="text"
          id="firstName"
          name="firstName"
          sx={styles.input}
        />
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <MainInput
          formik={formik}
          type="text"
          id="lastName"
          name="lastName"
          sx={styles.input}
        />
        <InputLabel
          htmlFor="email"
          sx={styles.inputLabel(
            formik.touched.email && Boolean(formik.errors.email)
          )}
        >
          Email
        </InputLabel>
        <MainInput
          formik={formik}
          type="text"
          id="email"
          name="email"
          sx={styles.input}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          sx={styles.btn}
        >
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default CreateContact;
