import React from "react";

type ButtonPropsType = {
    name: string

    onClick: () => void
    className: string;
    disabled?: boolean;
}
export const Button = (props: ButtonPropsType) => {

    return (
        <button
            onClick={props.onClick}

            className={props.className}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    )
}