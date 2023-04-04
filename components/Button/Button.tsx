import { HTMLAttributes, useEffect, useState } from "react";
import { render } from "react-dom";
import style from "./Button.module.scss";

interface IButtonProps {
  text: string;
  icon?: JSX.Element;
  className?: string;
  link?: string;
  isSubmit?: boolean;
  onClick?: () => any;
  theme?: "mainColor" | "mainColorSolid" | "dark" | "light";
}

const Button = (props: IButtonProps) => {
  switch (props.theme) {
    case "mainColor": {
      return (
        <button
          className={style.button}
          onClick={() => {
            props.onClick != undefined ? props.onClick() : "";
          }}
        >
          {props.icon}
          {props.text}
        </button>
      );
    }
    case "mainColorSolid": {
      return (
        <button
          className={style.buttonSolid}
          onClick={() => {
            props.onClick != undefined ? props.onClick() : "";
          }}
        >
          {props.icon}
          {props.text}
        </button>
      );
    }
    case "dark": {
      return (
        <button
          className={style.buttonDark}
          onClick={() => {
            props.onClick != undefined ? props.onClick() : "";
          }}
        >
          {props.icon}
          {props.text}
        </button>
      );
    }
    case "light": {
      return (
        <button
          className={style.buttonLight}
          onClick={() => {
            props.onClick != undefined ? props.onClick() : "";
          }}
        >
          {props.icon}
          {props.text}
        </button>
      );
    }
    default: {
      return (
        <button
          className={style.button}
          onClick={() => {
            props.onClick != undefined ? props.onClick() : "";
          }}
        >
          {props.icon}
          {props.text}
        </button>
      );
    }
  }
};

export default Button;
