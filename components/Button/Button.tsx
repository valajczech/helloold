import style from "./Button.module.scss";

interface IButtonProps {
  text: string;
  icon?: JSX.Element;
  className?: string;
  link?: string;
  isSubmit?: boolean;
  onClick?: () => any;
  theme?: "mainColor" | "dark" | "light";
}

const Button = (props: IButtonProps) => {
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
};

export default Button;
