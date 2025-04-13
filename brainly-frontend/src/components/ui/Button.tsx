import { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Sizes = "sm" | "md" | "lg";

interface ButtonProps {
    text: string;
    variant: Variants;
    size: Sizes;
    onClick?: () => void;
    startIcon?: ReactElement | string;
    endIcon?: ReactElement | string;
    fullWidth?: boolean;
    loading?:boolean;
}

const variantStyle = {
    "primary": "bg-blue-300 text-blue-900",
    "secondary": "bg-blue-900 text-blue-300"
}

const sizeStyles = {
    "sm": "px-4 py-2 ",
    "md": "px-4 py-3 text-2xl",
    "lg": "px-8 py-4 text-3xl"
}

const defaultStyles = "rounded-md flex items-center cursor-pointer"

export const Button = (props: ButtonProps) => {
    return (
        <button 
            onClick={props.onClick}
            className={`${variantStyle[props.variant]} ${sizeStyles[props.size]}
            ${defaultStyles} ${props.fullWidth ? " w-full flex justify-center" : " "} ${props.loading ? " opacity-50" : ""}`}>
            {props.startIcon} {props.text}
        </button>
    )
}