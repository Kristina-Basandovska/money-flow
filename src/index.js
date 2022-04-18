import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(reducer,composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
