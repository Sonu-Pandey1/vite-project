import rootReducer from "./redux/reducers/RootReducers"
import { createStore } from "@reduxjs/toolkit"
// import rootReducer from "./"


const store = createStore(
    rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default store