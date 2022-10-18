import { Stack } from "@mui/system";
import React from "react";
import ReactDom from "react-dom";
import { useTranslation } from "react-i18next";
import { theme } from "../../styles/Theme";
import ButtonWithIcon from "../Button";
import { PropsModal } from "./ModalTenants";
import { modalStyles, overlayStyles } from "./Styles";

const Modal: React.FC<PropsModal> = ({ open, children, onClose }) => {
  const { t } = useTranslation();
  const stylesOverlay = overlayStyles();
  const stylesModal = modalStyles();
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={stylesOverlay.root} />
      <div className={stylesModal.root}>
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
    document.getElementById("modal") as Element
  );
};

export default Modal;
