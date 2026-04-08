type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "success";
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
