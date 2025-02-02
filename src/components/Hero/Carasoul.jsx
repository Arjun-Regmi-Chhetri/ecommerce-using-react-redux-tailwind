import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

const Carasoul = ({ items }) => {

    const [index, setIndex] = useState(1)
    const slider = useRef(null)

    if (!items || items.length === 0) {
        return <h1>No items to display</h1>
    }

    const firstClone = { ...items[0], id: "firstClone" }
    const lastClone = { ...items[items.length - 1], id: "lastClone" }

    const clonedItems = [lastClone, ...items, firstClone]
    
    const nextHandler = () => {
        if(index >= clonedItems.length - 1) return
        setIndex((prev) => prev + 1)
        slider.current.style.transition = `transform 0.2s ease-in-out`;
    }

    const prevHandler = () =>{
        if(index <=0 ) return
        setIndex((prev)=> prev - 1)
        slider.current.style.transition = `transform 0.2s ease-in-out`;
    }

    const nextSlide = () => {
        nextHandler()
    }

    const prevSlide = () => {
        prevHandler()
    }

    useEffect(() => {
        slider.current.style.transform = `translateX(-${index * 100}%)`;


        const handleTransitionEnd = () => {

            if (clonedItems[index].id === firstClone.id) {
                slider.current.style.transition = 'none';
                setIndex(
                    clonedItems.length - index
                )

                //setIndex(1);
            }

            if(clonedItems[index].id === lastClone.id){
                slider.current.style.transition = 'none';
                setIndex(
                    clonedItems.length - 2
                )

                //setIndex(items.length);
            }

        }

        slider.current.addEventListener('transitionend', handleTransitionEnd)

        window.addEventListener('resize', () => {
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(${-index * 100}%)`;
            
        });

        return () => {
            if (slider.current) {
                slider.current.removeEventListener("transitionend", handleTransitionEnd);
                window.removeEventListener('resize', () => {
                    slider.current.style.transition = 'none';
                    slider.current.style.transform = `translateX(${-index * 100}%)`;
                })
            }    
        }


    }, [index]);


    const frame = clonedItems.map((item, index) => {


        let bgColor;

        if (index === 1 || item.id === "firstClone") {
            bgColor = 'bg-green-300'
        } else if (item.id === clonedItems.length - 2 || item.id === "lastClone") {
            bgColor = 'bg-red-300'
        }
        return (
            <div className={`min-w-full w-full h-full inline-block  ${bgColor} sm:p-10 p-6`} key={index}>
                <div className='sm:flex sm:items-center '>
                    <div className='flex justify-center items-center sm:w-3/5 w-full'>
                        <div className='text-center'>
                            <h2 className='font-extrabold sm:text-2xl md:text-3xl lg:text-4xl'>{item.content.title}</h2>
                            <p className='sm:pt-5 sm:text-sm md:text-lg'>{item.content.paragraph}</p>
                            <Link to="/product" className='relative'>
                            <button className='my-3 bg-black p-2 px-5 text-white rounded-md'>Shop Now</button>
                            </Link>
                        </div>

                    </div>
                    <div className='flex justify-center sm:w-2/5 w-full'>
                        <div className=' w-60 h-60 lg:h-80 lg:w-80 flex items-center'>
                            <img className='object-contain w-full h-full drop-shadow-lg' src={item.content.image} alt={item.content.title} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="w-full m-auto  relative  overflow-hidden">
            <div className="flex w-full h-full m-auto relative" ref={slider}>
                {frame}
            </div>
            <div className='absolute top-1/2 left-1 right-1 flex justify-between'>
                <button className='relative' onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>

                </button>
                <button className='relative' onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Carasoul
