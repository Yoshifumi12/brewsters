import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type ButtonProps = {
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ className = "", ...props }: ButtonProps) => {
    return (
        <button className={`rounded-10 transition-colors duration-200 ${className}`}{...props}>{props.children}</button>
    )
}

export default Button;