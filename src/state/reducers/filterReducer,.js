import { produce } from "immer";
import { actionList } from "../actions";

const initialState = {
    sortProduct: 'best-match',
    filters: {
        category: 'all',
        maxPrice: 0,
        minPrice: 0
    },
    search: '',
    gridView: true
};

export const filterReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case actionList.FILTER_CATEGORY:
                draft.filters.category = action.payload;
                break;
            case actionList.FILTER_PRICE:
                draft.filters.maxPrice = action.payload.maxPrice;
                draft.filters.minPrice = action.payload.minPrice;
                break;
            case actionList.FILTER_SEARCH:
                draft.search = action.payload;
                break;
            case actionList.SORT_PRODUCTS:
                draft.sortProduct = action.payload;
                break;
            case actionList.SET_GRID_VIEW:
                draft.gridView = true;
                break;
            case actionList.SET_LIST_VIEW:
                draft.gridView = false;
                break; 
            case actionList.CLEAR_FILTERS:
                draft.filters.category = 'all';
                draft.filters.maxPrice = 0;
                draft.filters.minPrice = 0;
                break;
            default:
                return state;
        }
    });
};
