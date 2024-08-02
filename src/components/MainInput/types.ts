import { FormikProps } from "formik";
import { SxProps, Theme } from "@mui/material";
import IFormValues from "../CreateContact/types";

interface IMainInputProps {
  formik: FormikProps<IFormValues>;
  sx?: SxProps<Theme>;
  name: string;
  id?: string;
  type?: string;
}

export default IMainInputProps;
