import React from "react";

export default function Button({ title, children, onClick, className, style }) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-full border border-black hover:bg-black hover:text-white ${className}`}
      style={style}
    >
      {title}
      {children}
    </button>
  );
}
