import react from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-[var(--primary)]",
  textColor = "text-[var(--primary-content)]",
  className = "",
  ...props
}) {
  return (
    <button type={type} className={`rounded-lg w-full p-2 ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
