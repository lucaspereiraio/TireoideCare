import React from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm";
  className?: string;
  href?: string;
}

const buttonStyles = tv({
  base: "rounded-lg font-semibold focus:outline-none",
  variants: {
    variant: {
      primary: "bg-primary-100 text-neuters-gray-20 hover:bg-primary-90",
      secondary: "bg-primary-20 text-neuters-gray-70 hover:bg-primary-10",
    },
    size: {
      sm: "w-full h-10 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm",
  className,
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <button
      className={twMerge(buttonStyles({ variant, size }), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
