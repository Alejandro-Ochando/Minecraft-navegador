import React from "react"
import { CreateRoot } from "@react-dom/client"
import App from './App'
import './index.css'

CreateRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)