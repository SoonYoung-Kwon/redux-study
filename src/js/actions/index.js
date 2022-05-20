import { ADD_ARTICLE } from "../constants/action-types"

export const addArticle = article => ({
    type: ADD_ARTICLE, // action 이름 just string
    payload: article
})