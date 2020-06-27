import React, { Children } from "react";

function Button({
  children,
  type,
  className,
  name,
  id,
  onClick: onClickMethod,
  disabled,
}) {
  return (
    <button
      type={type}
      className={className}
      name={name}
      id={id}
      onClick={onClickMethod}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
