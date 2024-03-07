import { createStore } from "redux";
import counterReducer from "./sevices/reducer/CounterReducer";

const store = createStore(counterReducer);
export default store;
