import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CountSetter} from "./CountSetter";


function AppWithRedux() {


    return (
        <div className={"count"}>
            <CountSetter/>
            <Counter/>
        </div>

    )
}


export default AppWithRedux;
