import { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Sizes = "sm" | "md" | "lg";

interface ButtonProps {
    text: string;
    variant: Variants;
    size: Sizes;
    onClick: () => void;
    startIcon?: ReactElement | string;
    endIcon?: ReactElement | string;
}

const variantStyle = {
    "primary": "bg-blue-300 text-blue-900",
    "secondary": "bg-blue-900 text-blue-300"
}

const sizeStyles = {
    "sm": "px-4 py-2 ",
    "md": "px-6 py-4 text-2xl",
    "lg": "px-6 py-4"
}

const defaultStyles = "rounded-md flex items-center"

export const Button = (props: ButtonProps) => {
    return (
        <button className={`${variantStyle[props.variant]} ${sizeStyles[props.size]}
        ${defaultStyles}`}>
        {props.startIcon} {props.text}
        </button>
    )
}