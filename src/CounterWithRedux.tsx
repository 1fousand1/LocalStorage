import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function CounterWithRedux() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch =  useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    };


    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default CounterWithRedux;
