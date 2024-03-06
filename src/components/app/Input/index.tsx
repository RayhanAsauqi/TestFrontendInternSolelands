
import { InputProps } from "./Input.type";

function Input({
  type,
  placeholder,
  value,
  names,
  onChange,
  onKeyDown,
}: InputProps) {
  return (
    <input
      type={type}
      name={names}
      placeholder={placeholder}
      className="input input-bordered w-full "
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
