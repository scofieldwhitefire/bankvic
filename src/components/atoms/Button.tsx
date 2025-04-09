const Button = ({
  children,
  variant = "primary" as "primary" | "secondary",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}) => {
  const baseClasses =
    "px-3 lg:px-6 py-1.5 lg:py-3 rounded-full font-normal lg:font-medium transition-all duration-200 cursor-pointer";

  const variantClasses = {
    primary: "bg-[#ff7a59] text-white hover:bg-orange-500 hover:shadow-md",
    secondary: "bg-white text-[#1a3b8e]",
    outline:
      "bg-white text-[#1a3b8e] border border-[#1a3b8e] hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
