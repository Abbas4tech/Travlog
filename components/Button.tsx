import React from 'react'
import { ButtonProps } from './types/interfaces'

const Button = ({ children, classes, Icon, position = "before", }: ButtonProps) => {
    return (
        <div role='button' className={`${classes.join(" ")} flex items-center gap-2 justify-center ` + `${position === "before" ? '' : 'flex-row-reverse'}`}>
            {Icon}
            <span>{children}</span>
        </div>
    )
}

export default Button;