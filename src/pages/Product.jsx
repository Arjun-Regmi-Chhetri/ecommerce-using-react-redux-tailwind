import BreadCrumbs from "../components/BreadCrumb"
import Filter from "../components/filter/Filter"
import Products from "../components/Product/Products"
import Sort from "../components/sort/Sort"


 const Product = () =>{
    return(
        <>

         <BreadCrumbs title='Product' />

         <div className="lg:grid grid-cols-6 gap-4">
            <div className="col-span-1">
                <Filter />
            </div>
            <div className="col-span-5">
             <Sort />
             <Products />
            </div>
         </div>
         
        </>
    )
}

export default Product