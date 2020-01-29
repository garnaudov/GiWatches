import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    {/*provider component will be parent of every component */}
    {/*once passed the store object, it will give the redux store context to the rest of the app*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
