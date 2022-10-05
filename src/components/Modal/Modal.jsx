import { Stack } from "@mui/system";
import React from "react";
import ReactDom from "react-dom";
import { theme } from "../../styles/Theme";
import ButtonWithIcon from "../Button";
import { modalStyles, overlayStyles } from "./Styles";

export default function Modal({ open, children, onClose }) {
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
          <ButtonWithIcon onClick={onClose} text="Cancel" />
        </Stack>
      </div>
    </>,
    document.getElementById("modal")
  );
}
