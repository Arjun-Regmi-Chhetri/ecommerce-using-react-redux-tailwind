import { actionList } from "../actions";



const initialState = {

        product: {},
        loading: false,
        error: null,

}




export const singleProductReducer = (state=initialState, action) =>{

    switch(action.type){
        case actionList.FETCH_SINGLE_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case actionList.FETCH_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                product:action.payload
            }
        
        case actionList.FETCH_SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        
        default:
            return state
    }

}
