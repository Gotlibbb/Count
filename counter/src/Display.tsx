import React from "react";

type DisplayPropsType = {
    count: number
    maxValue: number
    newMaxValue: number
    startValue: number
    newStartValue: number

}
export const Display = (props: DisplayPropsType) => {

    if (props.newMaxValue < props.newStartValue) {
        return (
            <div className={"display"}>
                <div className={"info"}>"Start value" or "max value" don't correct</div>
            </div>
        )
    }

    if (props.maxValue !== props.newMaxValue || props.startValue !== props.newStartValue) {
        return (
            <div className={"display"}>
                <div className={"info"}>Press "set" for change value</div>
            </div>
        )
    } else {
        return (

            <div className={props.count >= props.maxValue ? " display display-checked" : "display"}>
                <div>{props.count}</div>
            </div>
        )
    }

}