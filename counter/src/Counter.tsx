import React from "react";
import {Display} from "./Display";
import {Button} from "./Button";
import {incCountAC, resetCountAC, StateType} from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Store";

export const Counter = () => {

    let countPage = useSelector<AppRootStateType, StateType>(state => state.countPage);
    let dispatch = useDispatch();


    const changeIncCount = () => {
        dispatch(incCountAC())
    }
    const onClickReset = () => {
        dispatch(resetCountAC())
    }


    return (
        <div className="counter">
            <Display maxValue={countPage.maxValue} startValue={countPage.startValue} count={countPage.count}
                     newMaxValue={countPage.newMaxValue} newStartValue={countPage.newStartValue}/>
            <Button onClick={changeIncCount} name={"inc"} className={"inc"}
                    disabled={countPage.count >= countPage.maxValue || countPage.maxValue !== countPage.newMaxValue || countPage.startValue !== countPage.newStartValue ? true : false}/>
            <Button onClick={onClickReset} name={"reset"} className={"reset"}
                    disabled={countPage.count === countPage.startValue || countPage.maxValue !== countPage.newMaxValue || countPage.startValue !== countPage.newStartValue ? true : false}/>
        </div>

    );
}