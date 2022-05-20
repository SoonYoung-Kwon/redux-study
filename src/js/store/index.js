import { createStore } from "redux";
import rootReducer from "../reducers/index"
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools())

/*

    reducer?

    state와 action을 parameter로 가진 함수

    Redux에서 state는 reducer로부터 return

*/

export default store