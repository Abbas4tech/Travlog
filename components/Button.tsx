import React from 'react'
import { ButtonProps } from './types/interfaces'
import Photo from './Photo'

const Button = ({ children, classes, icon, iconUrl, position, iconName }: ButtonProps) => {
    return (
        <div role='button' className={`${classes.join(" ")}` + `${position === "before" ? 'flex' : 'flex flex-row-reverse'}`}>
            {icon && <Photo width={15} height={15} bucketUrl={iconUrl as string} alt={iconName as string} />}
            <span>{children}</span>
        </div>
    )
}

export default Button;