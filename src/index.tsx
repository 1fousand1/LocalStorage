import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CounterWithRedux from "./CounterWithRedux";
import {Provider} from "react-redux";
import {store} from "./bll/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <CounterWithRedux/>
    </Provider>
);

reportWebVitals();
