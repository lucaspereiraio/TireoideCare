import React from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}
const titleStyles = tv({
  base: "text-center my-4 text-neuters-gray-70 ",
  variants: {
    heading: {
      h1: "text-xl font-medium",
      h2: "text-lg font-semibold",
      h3: "text-base font-medium",
      h4: "text-base font-medium",
      h5: "text-base font-normal",
      h6: "text-base font-normal",
    },
  },
  defaultVariants: {
    heading: "h1",
  },
});

const Title: React.FC<TitleProps> = ({
  heading: Tag = "h1",
  children,
  className,
}) => {
  const mergedClasses = twMerge(titleStyles({ heading: Tag }), className);

  return <Tag className={mergedClasses}>{children}</Tag>;
};

export default Title;
