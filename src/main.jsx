import ReactDom from "react-dom/client";
import React from 'react'
import { restaurants } from '../Materials/mock'
import { App } from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App restaurants={restaurants} />);