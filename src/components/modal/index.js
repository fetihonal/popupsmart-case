import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { rootActions } from "../../redux-store/slices";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import close from "../../assets/images/close.png";
import info from "../../assets/images/info.png";
import subtract from "../../assets/images/Subtract.png";
import styles from "./style.module.css";

// Selectbox Style
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#EDEDED",
    height: 41,
    width: 350,
    margin: "0 auto",
    borderRadius: 0,
    borderColor: state.isFocused ? "none" : "none",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "none" : "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #111",
    color: "black",
    padding: 20,
    background: "#EDEDED",
  }),
};

function Modal() {
  // form Settings
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const [font, setFonts] = React.useState([]);
  const [isSubmitForm, setIsSubmitForm] = React.useState(false);

  //Redux
  const dispatch = useDispatch();
  const { data, status } = useSelector((RootState) => RootState.font.list);
  const { setting } = useSelector((RootState) => RootState.form.data);

  // get Font List
  React.useEffect(() => {
    dispatch(rootActions.font.list.onRequest());
  }, []);
  // fonts filter monospace and alphabetically sort
  React.useEffect(() => {
    if (status === "ready") {
      const filterFont = data
        .filter((i) => i.category === "monospace")
        .sort((a, b) => a.family.localeCompare(b.family))
        .map(function (item) {
          return { ...item, value: item.family, label: item.family };
        });
      setFonts(filterFont);
    }
  }, [data]);

  // modal form submit
  const onSubmit = (data) => setIsSubmitForm(true);

  return (
    <div className={cn(styles.modal)}>
      <span className={cn(styles.closeButton)}>
        <img src={close} />
      </span>
      {!isSubmitForm ? (
        <div className={cn(styles.formContent)}>
          <h2 className={cn(styles.headline)}>{setting.headline}</h2>
          <p className={cn(styles.description)}>{setting.description}</p>
          <form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Your name"
              className={cn(styles.input)}
              name="name"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <span className={cn(styles.err)}>
                <img src={info} />
                This field is required
              </span>
            )}
            <input
              type="text"
              placeholder="Email"
              className={cn(styles.input)}
              name="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors?.email && (
              <span className={cn(styles.err)}>
                <img src={info} />
                {errors?.email.message}
              </span>
            )}
            <Controller
              name="font"
              control={control}
              render={({ field }) => (
                <Select styles={customStyles} options={font} {...field} />
              )}
            />

            <button type="submit" className={cn(styles.button)}>
              GET MY 30% OFF
            </button>
          </form>
        </div>
      ) : (
        <div className={cn(styles.successMessage)}>
          <img src={subtract} />
          <h2>{setting.successMessage}</h2>
        </div>
      )}
    </div>
  );
}

export default Modal;
