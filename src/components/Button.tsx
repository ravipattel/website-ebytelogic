import React from "react";

type ButtonProps = {
    variant?: "default" | "icon" | "outline" | "white-contained" | "curvedFilled" | "curvedOutline" | "borderCut";
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: any;
    type?: "submit" | "reset" | "button" | undefined;
};

const Button: React.FC<ButtonProps> = ({
    variant = "default",
    children,
    onClick,
    className,
    disabled,
    type = "button",
    ...props
}) => {
    const buttonClassNames = `
           cursor-pointer
           ${variant === "default" && "text-white bg-primary border border-primary hover:bg-white hover:text-primary px-3 py-2 lg:px-5 lg:py-3 transition-all duration-400"}
           ${variant === "outline" && "bg-white text-primary hover:bg-[#EAEAEA] border-2 border-[#ECECEC]"}
           ${variant === "curvedFilled" && "bg-darkBlue text-white px-6 rounded-t-[35px] rounded-br-[35px] rounded-bl-md hover:bg-[#0c417f] transition"}
            ${variant === "curvedOutline" && "text-[#1A1A4B] text-sm md:text-base px-3 md:px-5 lg:py-2 border-2 rounded-t-[35px] rounded-br-[35px] rounded-bl-md border-black relative before:absolute before:content-[''] before:bg-[#F4F6F8] before:h-4 before:w-2 lg:before:top-1 before:-top-0.5 before:left-0 before:transform before:rotate-45 hover:scale-105 hover:shadow-[0_4px_20px_rgba(26,26,75,0.3)] hover:text-white hover:bg-[#1A1A4B] hover:border-[#1A1A4B] hover:before:hidden"}
            ${variant === "borderCut" && "text-[#1A1A4B] text-sm md:text-base px-3 md:px-5 lg:py-2 border-2 rounded-t-[35px] rounded-br-[35px] rounded-bl-md border-black relative before:absolute before:content-[''] before:bg-white before:h-2 before:w-1 before:left-1/2 before:-top-[5px] after:absolute after:content-[''] after:bg-white after:h-2 after:w-1 after:left-1/2 after:-bottom-[5px] hover:scale-105 hover:text-white hover:bg-darkBlue hover:border-darkBlue hover:before:hidden hover:after:hidden"}
           ${className && className}
       `;
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={buttonClassNames}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
