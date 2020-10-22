import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {AddMaxValueAC, AddStartValueAC, ChangeMaxValueAC, ChangeStartValueAC, StateType} from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Store";


export const CountSetter = () => {

    let countPage = useSelector<AppRootStateType, StateType>(state => state.countPage);
    let dispatch = useDispatch();

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {

        dispatch(ChangeMaxValueAC(Number(event.currentTarget.value)))
    }
    const changeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeStartValueAC(Number(event.currentTarget.value)))
    }
    const onClick = () => {
        dispatch(AddStartValueAC());
        dispatch(AddMaxValueAC());
    }
    let errorStyle =
        Number(localStorage.getItem("maxValue")) === countPage.newMaxValue &&
        Number(localStorage.getItem("startValue")) === countPage.newStartValue ||
        countPage.newMaxValue <= countPage.newStartValue ||
        countPage.newMaxValue < 0 ||
        countPage.newStartValue < 0;

    return (
        <div>
            <div>
                <span>max value</span>
                <input type={"number"}
                       onChange={changeMaxValue}
                       className={errorStyle ? "input-error" : ""}
                       value={countPage.newMaxValue}/>
            </div>
            <div>
                <span>start value</span>
                <input type={"number"}
                       onChange={changeStartValue}
                       value={countPage.newStartValue}/>
            </div>
            <Button
                onClick={onClick}
                name={"set"}
                className={"inc"}
                disabled={errorStyle ? true : false}/>
        </div>
    )

}