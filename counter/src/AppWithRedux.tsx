import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CountSetter} from "./CountSetter";


function AppWithRedux() {


    return (
        <div>
            <Counter/>
            <CountSetter/>
        </div>

    )
}


export default AppWithRedux;
