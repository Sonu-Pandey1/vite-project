import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './Store.js'
// import './index.css'


store.subscribe(()=>console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store ={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)
