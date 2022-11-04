import React from "react";
import App from "./App";
import './index.css'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    );