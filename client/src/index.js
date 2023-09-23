import React from "react"
import ReactDOM from "react-dom"
import {SocketContext,ContextProvider} from './SocketContext'
import App from "./App"
import "./style.css";

ReactDOM.render(
<ContextProvider>
<App/>
</ContextProvider>
,
document.getElementById("root"))