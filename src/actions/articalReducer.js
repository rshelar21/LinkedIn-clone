import { SET_LOADING_STATUS, GET_ARTICLES } from "../actions/actionType";

const InitState = {
    articles: [],
    loading: false,
}

const articalReducer = (state= InitState, action) =>{
    switch(action.type){
        case GET_ARTICLES:
            return{
                ...state,
                articles: action.payload,
            }

        case SET_LOADING_STATUS:
            return {
                ...state,
                loading: action.status,
            }
            
        default:
            return state;
    }

}

export default articalReducer;