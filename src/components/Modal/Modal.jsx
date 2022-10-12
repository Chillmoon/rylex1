import { Stack } from "@mui/system";
import React from "react";
import ReactDom from "react-dom";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/Theme";
import ButtonWithIcon from "../Button";
import { modalStyles, overlayStyles } from "./Styles";

export default function Modal({ open, children, onClose }) {
  const { t } = useTranslation();
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={overlayStyles} />
      <div style={modalStyles}>
        {children}
        <Stack
          sx={{
            position: "absolute",
            top: "655px",
            left: "304px",
          }}
        >
          <ButtonWithIcon onClick={onClose} text={t("cancel")} />
        </Stack>
      </div>
    </>,
    document.getElementById("modal")
  );
}
