import { ButtonProps } from "../types/global";
import classNames from "classnames";
import React from "react";

const Button = ({
    text,
    icon,
    forwardIcon,
    bg,
    border,
    color,
    className,
    iconSize
} : ButtonProps) => {
    return(
        <>
            <button
                className={classNames("relative flex items-center justify-center gap-[8px] py-[10px] px-[20px] rounded-[10px] text-[14px] hover:opacity-[0.8] hover:shadow-[0px_8px_24px_0px_#00451C14] hover:top-[3px]", className)}
                style={{
                    border,
                    background: bg,
                    color
                }}
            >
                {
                    icon &&
                        <>
                            {
                                React.createElement(
                                    icon,
                                    {
                                        className: 'w-5 h-5'
                                    }
                                )
                            }
                        </>
                }
                {text}
                {
                    forwardIcon &&
                        <>
                            {
                                React.createElement(
                                    forwardIcon,
                                    {
                                        className: 'w-5 h-5'
                                    }
                                )
                            }
                        </>
                }
            </button>
        </>
    )
}

export default Button;