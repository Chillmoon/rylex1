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
            display: "flex",
            flexDirection: "row",
            gap: "18px",
            top: "655px",
            left: "304px",
          }}
        >
          <ButtonWithIcon onClick={onClose} text="Cancel" type="cancel" />
          <ButtonWithIcon text="Save" />
        </Stack>
      </div>
    </>,
    document.getElementById("modal")
  );
}
