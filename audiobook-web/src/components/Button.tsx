import { ReactNode } from "react";

type ButtonProps =
  | {
      type: "button";
      variant?: "primary" | "secondary" | "outline";
      text: string;
      target: () => void;
      icon?: ReactNode;
      disabled?: boolean;
    }
  | {
      type: "link";
      variant?: "primary" | "secondary" | "outline";
      text: string;
      target: string;
      icon?: ReactNode;
      disabled?: boolean;
    };

export default function Button({
  type,
  text,
  target,
  icon,
  disabled,
  variant = "primary",
}: ButtonProps) {
  const bg =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-700 text-white"
      : variant === "secondary"
      ? "bg-gray-300 hover:bg-gray-400 text-gray-800"
      : "bg-transparent hover:bg-blue-500 text-blue-700 border border-blue-500 hover:border-transparent";

  if (type === "button") {
    return (
      <button
        disabled={disabled}
        onClick={target}
        className={` ${bg} flex justify-center items-center font-bold py-2 px-4 rounded duration-100 ${
          disabled && "opacity-50 cursor-not-allowed"
        }}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    );
  }
  if (type === "link") {
    return (
      <a
        href={target}
        className={` ${bg} flex justify-center items-center font-bold py-2 px-4 rounded duration-100 ${
          disabled && "opacity-50 cursor-not-allowed"
        }}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </a>
    );
  }
}
