import { carasoulData } from "../../constant";
import { actionList } from "../actions";

const initialState ={
    items:carasoulData,
    loading: false,
    error: null
}

export const carouselReducer = (state=initialState, action)=>{
    switch(action.type){
        case actionList.FETCH_CARAOSUL_REQUEST:
            return{
                ...state,
                loading:true
            }
        case actionList.FETCH_CARAOSUL_SUCCESS:
            return{
                ...state,
                loading:false,
                items:action.payload
            }
        case actionList.FETCH_CARAOSUL_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}