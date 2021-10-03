import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";

import reducers from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = reduxSaga();
const middlewares = [
  sagaMiddleware,
];

const reduxStorage = () => {

  if(__DEV__) {
    const createDebugger = require("redux-flipper").default;
    middlewares.push(createDebugger());
  }

  return {
    ...createStore(reducers, applyMiddleware(...middlewares)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

const storage = reduxStorage();

export default storage;
