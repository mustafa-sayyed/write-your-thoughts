import { cn } from "@/lib/utils";

function Button({ children, type = "button", className = "", ...props }) {

  const initialDesign = "bg-primary hover:bg-(--primary-hover) active:bg-(--primary-hover) text-primary-foreground rounded-md w-full p-2 cursor-pointer";
  return (
    <button type={type} className={cn(initialDesign, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
