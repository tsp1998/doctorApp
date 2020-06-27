import React from "react";

function TextArea({ children, id, name, onChangeMethod, placeholder, value }) {
  return (
    <textarea
      id={id}
      onChange={onChangeMethod}
      placeholder={placeholder}
      value={value}
    >
      {children}
    </textarea>
  );
}

export default TextArea;
