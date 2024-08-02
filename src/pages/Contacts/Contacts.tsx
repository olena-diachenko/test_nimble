import React from "react";
import CreateContact from "components/CreateContact/CreateContact";
import { Box } from "@mui/material";
import styles from "./Contacts.styled";

const Contacts = () => {
  return (
    <Box sx={styles.contactsWrapper}>
      <CreateContact />
    </Box>
  );
};

export default Contacts;
