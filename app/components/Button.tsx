interface ButtonProps {
    className:string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    disabled?:boolean;
}
const Button = ({
    className,
    onClick,
    disabled,
    text
}:ButtonProps) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
export default Button