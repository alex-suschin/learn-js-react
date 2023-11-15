import ReactDom from "react-dom/client";
import React from 'react'
import { restaurants } from '../Materials/mock'

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <ul>
        <li>{restaurants[0].name}</li>
    </ul>
);

export default main