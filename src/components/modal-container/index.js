import React from "react";
import cn from "classnames";
import Modal from "../modal/";
import bg from "../../assets/images/bg.png";
import styles from "./modal-container.module.css";

function ModalContainer() {
  return (
    <div
      className={cn(styles.container)}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Modal />
    </div>
  );
}

export default ModalContainer;
