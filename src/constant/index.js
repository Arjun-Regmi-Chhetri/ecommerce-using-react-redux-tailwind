
import { GiReturnArrow, GiDeliveryDrone, GiPayMoney } from "react-icons/gi";

import beautyProduct from '../assets/beauty-product.png';
import electric from '../assets/electric.png';

const slideImages = {
    'image-1': beautyProduct,
    'image-2': electric,
}

const icons = {
    'delivery': GiDeliveryDrone,
    'return': GiReturnArrow,
    'payment': GiPayMoney,
};

export const carasoulData = [
    
    {
        'id': 1,
        'content': {
            'title': 'Beauty Redefined',
            'paragraph': 'Discover the essence of beauty with our premium beauty products, crafted to enhance your natural glow.',
            'image': slideImages['image-1'] 
        }
    },
    {
        'id': 2,
        'content': {
            'title': 'Powering Your Future',
            'paragraph': 'Experience the next generation of innovation with our cutting-edge electric products, designed to empower your lifestyle.',
            'image': slideImages['image-2'] 
        }
    }
]


export const services = [
    {
        'id': 1,
        'title': 'Payment',
        'paragraph': 'We provide a secure and convenient payment gateway for all your transactions.',
        'icon': icons['payment']
    }
    ,
    {
        'id': 2,
        'title': 'Delivery',
        'paragraph': 'We offer fast and reliable delivery services to ensure your products reach you on time.',
        'icon': icons['delivery']
    }
    ,
    {
        'id': 3,
        'title': 'Return',
        'paragraph': 'We have a hassle-free return policy to ensure you are satisfied with your purchase.',
        'icon': icons['return']
    }
]



export const sorts = [

    {value: 'best-match', label: 'Best Match'},
    {value: 'price-lowest', label: 'Price low to High'},
    {value: 'price-highest', label: 'Price High to Low'},
    
]