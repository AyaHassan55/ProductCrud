import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;
    className?: string;

}

const Button = ({ children, className, ...rest }: IProps) => {
    return (
      
            <button  className={`${className} text-white p-2 rounded-md w-full`} {...rest}>
                {children}
            </button>

        
    )
}

export default Button