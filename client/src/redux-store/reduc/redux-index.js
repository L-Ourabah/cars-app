import { combineReducers } from "redux";
import { sidebar } from './redux-sidebar';

export const rootReducer = combineReducers({
    sidebar: sidebar,
})