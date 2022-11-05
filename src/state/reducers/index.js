import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import quoteReducer from "./quoteReducer";

const reducers = combineReducers({
    color: colorReducer,
    quote: quoteReducer,
});

export default reducers;