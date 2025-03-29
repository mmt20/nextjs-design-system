import { tailwindClassesMerge } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(["inline-flex  w-fit  justify-center items-center rounded-md  duration-200 "], {
  variants: {
    variant: {
      primary: "bg-black text-white dark:bg-primary dark:text-black",
      outline: "bg-transparent text-black dark:text-white dark:bg-transparent border border-gray-300",
      secondary: "bg-gray-300 text-black dark:bg-gray-700 dark:text-white",
      destructive: "bg-red-500 text-white dark:bg-red-700",
      ghost: "bg-transparent text-black dark:text-white dark:bg-transparent",
      link: "bg-transparent text-blue-500 dark:text-blue-300 dark:bg-transparent",
    },
    size: {
      xs: "px-2.5 text-xs h-6",
      sm: "px-3 text-sm h-8",
      base: "px-4 text-base h-10",
      lg: "px-6 text-lg h-12",
    },
    fullWidth: {
      true: "w-full text-center",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
  },
});
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ children, variant, size, fullWidth, ...rest }: IProps) => {
  return (
    <button className={` ${tailwindClassesMerge(buttonVariants({ variant, size, fullWidth }))}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
