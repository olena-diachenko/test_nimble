import React, { FC } from "react";
import { TextField } from "@mui/material";
import IMainInputProps from "./types";

const MainInput: FC<IMainInputProps> = ({ formik, sx, name, id, type }) => {
  const isError = formik.touched[name] && Boolean(formik.errors[name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <TextField
      variant="outlined"
      type={type}
      id={id}
      name={name}
      value={formik.values[name]}
      onChange={handleChange}
      onBlur={formik.handleBlur}
      error={isError}
      helperText={formik.touched[name] && formik.errors[name]}
      InputProps={{
        disableUnderline: true,
      }}
      InputLabelProps={{ shrink: true }}
      sx={sx}
    />
  );
};

export default MainInput;
