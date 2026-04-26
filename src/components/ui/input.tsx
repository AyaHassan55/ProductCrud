import type { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {



}

const Input = ({...rest}: IProps) => {
    return (
       
            
            <input 
             required={false}
              className='mt-3 border border-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500' {...rest} />
       
    )
}

export default Input