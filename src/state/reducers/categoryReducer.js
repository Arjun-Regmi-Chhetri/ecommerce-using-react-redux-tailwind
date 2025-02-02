import { actionList } from "../actions";


const initialState={
    categories:[],
    loading: false,
    error: null,
    fetchedCategory: false
}


export const categoryReducer = (state=initialState, action)=>{

    switch(action.type){
        case actionList.FETCH_CATEGORY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actionList.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
                fetchedCategory: true
            }
        case actionList.FETCH_CATEGORY_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }

        default:
            return state
    }

}