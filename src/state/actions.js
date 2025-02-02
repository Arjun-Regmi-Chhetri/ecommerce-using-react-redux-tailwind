import { axiosInstance } from "./service"
import { services } from "../constant"


export const actionList = {
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',


    FETCH_SINGLE_PRODUCT_REQUEST: 'FETCH_SINGLE_PRODUCT_REQUEST',
    FETCH_SINGLE_PRODUCT_SUCCESS: 'FETCH_SINGLE_PRODUCT_SUCCESS',
    FETCH_SINGLE_PRODUCT_FAILURE: 'FETCH_SINGLE_PRODUCT_FAILURE',


    FETCH_CATEGORY_REQUEST: 'FETCH_CATEGORY_REQUEST',
    FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY_SUCCESS',
    FETCH_CATEGORY_FAILURE: 'FETCH_CATEGORY_FAILURE',



    FETCH_CARAOSUL_REQUEST: 'FETCH_CARAOSUL_REQUEST',
    FETCH_CARAOSUL_SUCCESS: 'FETCH_CARAOSUL_SUCCESS',
    FETCH_CARAOSUL_FAILURE: 'FETCH_CARAOSUL_FAILURE',

    

    FETCH_SORT_TYPE: 'FETCH_SORT_TYPE',

    FILTER_CATEGORY: 'FILTER_CATEGORY',
    FILTER_PRICE: 'FILTER_PRICE',
    SORT_PRODUCTS: 'SORT_PRODUCTS',
    SET_LIST_VIEW: 'SET_LIST_VIEW',
    SET_GRID_VIEW: 'SET_GRID_VIEW',
    CLEAR_FILTERS: 'CLEAR_FILTERS',
    FILTER_SEARCH: 'FILTER_SEARCH',



    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_CART: 'UPDATE_CART',
    REMOVE_ITEM: 'REMOVE_ITEM',
    SHOP_CART: 'SHOP_CART'

}


/*------------------------------------Product Actions --------------------------------- */

export const fetchProductRequest = () =>({
    type:actionList.FETCH_PRODUCTS_REQUEST
})

export const fetchProductSuccess = (products) =>({
    type:actionList.FETCH_PRODUCTS_SUCCESS,
    payload:products
})

export const fetchProductFailure = (error) =>({
    type:actionList.FETCH_PRODUCTS_FAILURE,
    payload:error
})



/*------------------------------------Single Product Actions --------------------------------- */

export const fetchSingleProductRequest = ()  =>({
    type:actionList.FETCH_SINGLE_PRODUCT_REQUEST
})

export const fetchSingleProductSuccess = (product) =>({
    type:actionList.FETCH_SINGLE_PRODUCT_SUCCESS,
    payload:product
})

export const fetchSingleProductFailure = (error) =>({
    type:actionList.FETCH_SINGLE_PRODUCT_FAILURE,
    payload:error
})


/*------------------------------------Category Actions --------------------------------- */

export const fetchCategoryRequest = () =>({
    type:actionList.FETCH_CATEGORY_REQUEST
})

export const fetchCategorySuccess = (category) =>({
    type:actionList.FETCH_CATEGORY_SUCCESS,
    payload:category
})

export const fetchCategoryFailure = (error) =>({
    type: actionList.FETCH_CATEGORY_FAILURE,
    payload: error
})

/*------------------------------------Carasoul Actions for custom carousel [constant] --------------------------------- */

export const fetchCarasoulRequest = () =>({
    type:actionList.FETCH_CARAOSUL_REQUEST
})

export const fetchCarasoulSuccess = (items) =>({
    type:actionList.FETCH_CARAOSUL_SUCCESS,
    payload:items
})

export const fetchCarasoulFailure = (error) =>({
    type:actionList.FETCH_CARAOSUL_FAILURE,
    payload:error
})




/*------------------------------------filter product  --------------------------------- */




export const filterCategory = (category) => ({
    type: actionList.FILTER_CATEGORY,
    payload: category
})

export const filterPrice = (minPrice, maxPrice) => ({
    type: actionList.FILTER_PRICE,
    payload: {minPrice, maxPrice}
})


export const sortProducts = (sortType) =>({
    type:actionList.SORT_PRODUCTS,
    payload:sortType
})

export const setGridView = () =>({
    type:actionList.SET_GRID_VIEW
})

export const setListView = ()=>({
    type:actionList.SET_LIST_VIEW
})

export const clearFilters = () =>({
    type:actionList.CLEAR_FILTERS
})


export const filterSearch = (search) =>({
    type:actionList.FILTER_SEARCH,
    payload:search
})





/*------------------------------------add to cart --------------------------------- */




export const addToCart = (product, quantity) => ({
    type: actionList.ADD_TO_CART,
    payload: { product, quantity }
});


export const removeItem = (id) => ({
    type: actionList.REMOVE_ITEM,
    payload: id
})


export const upDateCart = (id, quantity) => ({
    type: actionList.UPDATE_CART,
    payload: { id, quantity }
})


export const shopCart = (selectedItem = []) => ({
    type: actionList.SHOP_CART,
    payload: {selectedItem}
})




/*------------------------------------fetch api --------------------------------- */



export const fetchProducts = () => async (dispatch, getState) => {
    const { loadedProducts } = getState().products
    if (loadedProducts) return

    dispatch(fetchProductRequest())
    try {
        const response = await axiosInstance.get('/products')
        dispatch(fetchProductSuccess(response.data))
    } catch (error) {
        dispatch(fetchProductFailure(error.message))
    }
}


export const fetchSingleProduct = (id) => async(dispatch)=>{
    dispatch(fetchSingleProductRequest())
    try{
        const response = await axiosInstance.get(`/products/${id}`)
        dispatch(fetchSingleProductSuccess(response.data))
    }catch(error){
        dispatch(fetchSingleProductFailure(error.message))
    }
}


export const fetchCategory = () => async(dispatch, getState) =>{

    const {fetchedCategory} =  getState().categories

    if(fetchedCategory ) return

    dispatch(fetchCategoryRequest())
    try{
        const response = await axiosInstance.get('/products/categories')
        dispatch(fetchCategorySuccess(response.data))
    }catch(error){
        dispatch(fetchCategoryFailure(error))
    }
}



