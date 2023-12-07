import React from "react";

type ButtonProps = {
    children: React.ReactNode,
    bgColor?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const ButtonSmall = ({children, ...props}: ButtonProps)  => {
    return <button
                className="py-9px px-15px bg-grey_seven text-14px text-white font-medium font-inter rounded-60px"
                {...props}>{children}</button>
}

export default ButtonSmall;