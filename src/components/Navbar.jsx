import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { filterSearch } from '../state/actions';

const navItems = [
    {
        label: "Home",
        ref: ["/", "/home"]

    },
    {
        label: "Product",
        ref: ["/product"]
    }, {
        label: "services",
        ref: ["/services"]
    }
]

export const Navbar = () => {
    const location = useLocation()

    const [isSticky, setIsSticky] = useState(false)

    const {totalItems} = useSelector(state=>state.cart)

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    window.onscroll = () => {
        window.scrollY > 40 ? setIsSticky(true) : setIsSticky(false)
    }


    const handleSearch = (e) =>{
        e.preventDefault()
        dispatch(filterSearch(search))

        if(location.pathname !== '/product'){
            navigate('/product')
        }
        
    }

    return (
        <>
            <header className={`navbar xl:px-0 px-5 sm:px-10 sticky top-0 z-50  border-b-[1px]  ${isSticky ? 'bg-green-100 transition' : 'bg-green-50 border-green-300'}`}>
                <div className='w-full max-w-[1280px] mx-auto ' >
                    <div className='flex  py-1  mx-auto justify-end items-center'>
                        <ul className='flex text-xs sm:text-sm gap-5 text-black-500'>
                            <li>Help & Support</li>
                            <li>Login</li>
                            <li>Change language</li>
                        </ul>
                    </div>
                    <div className={`flex justify-between  items-center sm:gap-4 gap-2 py-2  mx-auto `}>
                        <div className="text-green-900 ">
                            <Link
                                to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                                    <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                                </svg>
                            </Link>


                        </div>


                        <ul className='sm:w-3/5 w-full'>
                            <form action="" onSubmit={handleSearch}>
                                <div className='border-2 bg-white border-green-300 rounded-lg flex items-center gap-2 '>
                                    <input type="text" name='text' placeholder="Search "  value={search} onChange={(e)=>setSearch(e.target.value)} className='m-2 outline-none w-full'  />
                                    <button type='submit' className="bg-green-300 text-white h-[40px] p-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                        </svg>

                                    </button >
                                </div>

                            </form>
                        </ul>
                        <div className="cart flex items-center gap-2 relative text-green-900">
                            <Link to="/cart">
                                <LocalGroceryStoreIcon fontSize="large" />
                                <div className="cart-count bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center absolute right-0 top-[-10px]">
                                    {totalItems}
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className='py-1 pb-3 text-sm'>
                        <ul className="flex gap-10 text-green-900 font-regular">
                            {
                                navItems.map((item, index) => (
                                    <li key={index}>

                                        <NavLink
                                            to={item.ref[0]}
                                            className={({ isActive }) =>
                                                (isActive || item.ref.includes(location.pathname)) && item.label !== 'services'

                                                    ? 'border-b-[3px] pb-1 border-red-500'
                                                    : 'text-green-900'
                                            }
                                        >

                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </header>


        </>
    )
}