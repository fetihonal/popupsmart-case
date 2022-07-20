import React from "react";
import cn from "classnames";

import styles from "./style.module.css";

function Textarea({ onchange, ...props }) {
  return (
    <textarea {...props} className={cn(styles.textarea)} rows={3}></textarea>
  );
}

function Input({ onchange, ...props }) {
  return <input type="text" {...props} className={cn(styles.input)}></input>;
}

function FormElement({ full = false, className, ...props }) {
  const Comp = props.textarea ? Textarea : Input;
  return (
    <fieldset>
      <label className={cn(styles.label)}>{props.label}</label>
      <Comp {...props}></Comp>
    </fieldset>
  );
}

export default FormElement;
