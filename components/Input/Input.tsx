import { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.scss";

interface IInputProps {
  type: HTMLInputTypeAttribute;
  value?: string;
  fixedPlaceholder?: string;
  onChange?: (e: string) => void;
}

const Input = (props: IInputProps) => {
  if (props.fixedPlaceholder != undefined) {
    return (
      <div className={styles.inputWithFixedPlaceholder}>
        <span>{props.fixedPlaceholder}</span>
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => {
            return props.onChange != undefined
              ? props.onChange(e.target.value.toString())
              : null;
          }}
        />
      </div>
    );
  } else {
    return (
      <input
        type={props.type}
        className={styles.input}
        value={props.value}
        onChange={(e) => {
          return props.onChange != undefined
            ? props.onChange(e.target.value.toString())
            : null;
        }}
      />
    );
  }
};

export default Input;
