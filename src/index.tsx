import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./react/App";

let container = document.getElementById('app');
let root = ReactDOMClient.createRoot(container!);
root.render(<App/>);
