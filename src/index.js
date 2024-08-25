// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createRoot } from 'react-dom/client';

import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}><App /></Provider>);
