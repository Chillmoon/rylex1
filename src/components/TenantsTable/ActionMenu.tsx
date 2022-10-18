import { Box } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AddCircleOutline from "../../images/AddCircleOutline";
import { PropsButton } from "../../types/types";
import ButtonWithIcon from "../Button";
import { useButtonStyles } from "../Button/styles";
import Modal from "../Modal/Modal";
import ModalTenants from "../Modal/ModalTenants";

export default function ActionMenu(
  props: JSX.IntrinsicAttributes & PropsButton
) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const classes = useButtonStyles();

  const { t } = useTranslation();

  return (
    <>
      <ButtonWithIcon
        {...props}
        icon={
          <Box
            sx={{
              width: "14px",
              height: "14px",
              paddingBottom: "10px",
            }}
          >
            <AddCircleOutline />
          </Box>
        }
        text={t("add")}
        onClick={() => setIsOpen(true)}
        sx={classes.button}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <ModalTenants onClose={handleClose} />
      </Modal>
    </>
  );
}
