import { ButtonProps } from "./Button.type";

function Button({ label,className, onClick }: ButtonProps) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
