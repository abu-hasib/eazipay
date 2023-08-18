import React from 'react'

interface ButtonProps {
    className: string;
    children: string;
}

const Button = ({className, children, ...props}: ButtonProps) => {
  return (
    <button className={`py-[10px] px-[32px] ${className}`} {...props}>{children}</button>
  )
}

export default Button