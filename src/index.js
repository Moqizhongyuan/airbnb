import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import "antd/dist/reset.css";
import "./assets/css/index.less";

import "normalize.css";

import store from "./store";
import theme from "@/assets/theme";

// @ => src
// 问题：react脚手架隐藏webpack
// 解决一：npm run eject
// 解决二：craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter fallback="loading">
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </React.StrictMode>
);
