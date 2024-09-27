import React from "react";
import cls from "./Modal.module.css";

const Modal = ({ children, iHideModal }) => {
  return (
    <>
      <div className={cls.backdrop} onClick={iHideModal} />
      <dialog open className={cls.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
