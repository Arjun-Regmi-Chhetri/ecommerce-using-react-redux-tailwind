import { produce } from "immer";
import { actionList } from "../actions";

const initialState = {
    cart: [],
    totalItems: 0,
}


export const cartReducer = (state = initialState, action) => {
    return produce(state, draft=>{
        switch(action.type){
            case actionList.ADD_TO_CART:

                const { product, quantity } = action.payload

                const index = draft.cart.findIndex((item)=> item.id === product.id)

                if(index !== -1){
                    const [existItem] = draft.cart.splice(index, 1)
                    existItem.quantity += quantity
                    draft.cart.unshift(existItem)
                }else{
                    draft.cart.unshift({...product, quantity})
                }
               
                draft.totalItems = draft.cart.reduce((sum, item)=> sum + item.quantity, 0)
                break
            
            case actionList.UPDATE_CART:
                const {id, quantity: updateQuantity} = action.payload

                const itemIndex = draft.cart.findIndex(item=>item.id === id)

                if(itemIndex !== -1)
                    draft.cart[itemIndex].quantity = updateQuantity

                draft.totalItems = draft.cart.reduce((sum, item)=> sum + item.quantity, 0)
                break
        
            case actionList.REMOVE_ITEM:
                draft.cart = draft.cart.filter((item) => item.id !== action.payload)
                draft.totalItems = draft.cart.reduce((sum, item)=> sum + item.quantity, 0)
                break

            case actionList.SHOP_CART:
                const { selectedItem } = action.payload

                if(selectedItem.length === draft.cart.length){
                    draft.cart = []
                }else{
                    draft.cart = draft.cart.filter((item)=> !selectedItem.includes(item.id))
                }
                
                draft.totalItems = draft.cart.reduce((sum, item)=> sum + item.quantity, 0)
                break
         
            default:
                return state
        }
    })
}



/*
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionList.ADD_TO_CART:

            const { product, quantity } = action.payload
            const items = state.cart.find((item)=> item.id === product.id)

            let addCart;
            if(items){
                addCart = state.cart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity + quantity}: item)
            }
            else{
                addCart = [...state.cart, {...product, quantity}]
            }
            return {
                ...state,
                cart: addCart
            }
        default:
            return state
    }
}

*/