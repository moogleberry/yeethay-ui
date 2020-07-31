import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./reducers";

export const ConfiguredStore = () => {
	const store = createStore(rootReducer, applyMiddleware(logger));

	return store;
}
