import { ADD_ARTICLE } from "../constants/action-types"

// 초기 상태
const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {...state, articles: [...state.articles, action.payload]} // concat은 초기 배열을 변경하지 않는 순수 함수
            // return state.articles.push(action.payload) > push는 초기 배열이 변경
            // spread 연산자로 기존 state.articles에 action.payload (article) 병합
        default:
            return state
    }
}

//  초기 상태를 state로 가지는 reducer

export default rootReducer

// reducer가 실질적인 기능 담당