interface IProps {
  children: React.ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width }: IProps) => {
  return (
    <button className={`${className} ${width} rounded-lg text-white px-3 py-3 duration-200 font-medium`}>
      {children}
    </button>
  );
};

export default Button;
