import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";

}

const Button = ({ children, className, width, ...rest }: IProps) => {
    return (
      
            <button  className={`${className} text-white p-2 rounded-md ${width}`} {...rest}>
                {children}
            </button>

        
    )
}

export default Button