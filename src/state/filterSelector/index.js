import { createSelector } from "reselect";

const getFilter = (state) => state.filter.filters || {};
const getProducts = (state) => state.products.products || [];
const getSortProduct = (state) => state.filter.sortProduct || 'best-match';
const getSearchText = (state) => state.filter.search || '';


export const filterSelector = createSelector(
    [getFilter, getProducts, getSortProduct, getSearchText],
    (filters, products, sortProduct, search)=>{

        const {category, maxPrice, minPrice} = filters


        let filtered =[...products]


        if(category && category !== 'all') {
            filtered = filtered.filter(product=>product.category === category)
        }


        filtered = filtered.filter((product)=>product.price >= minPrice && product.price <= (maxPrice || Infinity) )



        switch(sortProduct){
            case 'price-lowest':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-highest':
                filtered.sort((a,b)=>b.price - a.price)
            default:
                break;
        }
      

        if(search){
            filtered = filtered.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
        }


        return filtered

        

    }
)