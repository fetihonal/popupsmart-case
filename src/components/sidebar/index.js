import React from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { rootActions } from "../../redux-store/slices";
import FormElement from "../form-element/index";
import styles from "./sidebar.module.css";

function Siderbar() {
  //Redux
  const dispatch = useDispatch();
  const { setting } = useSelector((RootState) => RootState.form.data);

  return (
    <div className={cn(styles.sidebar)}>
      <h2 className={cn(styles.title)}>General Setting</h2>
      <FormElement
        label="Headline"
        value={setting.headline}
        onChange={(e) =>
          dispatch(rootActions.form.data.setHeadline(e.target.value))
        }
      />
      <FormElement
        label="Description"
        textarea={true}
        value={setting.description}
        onChange={(e) =>
          dispatch(rootActions.form.data.setDescription(e.target.value))
        }
      />
      <FormElement
        label="Success Message"
        value={setting.successMessage}
        onChange={(e) =>
          dispatch(rootActions.form.data.setSuccessMessage(e.target.value))
        }
      />
    </div>
  );
}

export default Siderbar;
