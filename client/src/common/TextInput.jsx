import React from "react";

function TextInput({
  type,
  name,
  className,
  id,
  value,
  placeholder,
  onChange: onChangeMethod,
}) {
  return (
    <input
      type={type}
      name={name}
      className={className}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChangeMethod}
    />
  );
}

export default TextInput;
