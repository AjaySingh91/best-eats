import React from 'react'
import {data} from '../Data/Data'
import { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";


function Food() {

    const [foods,setFoods ] = useState(data);
    
    //  Filter by type
    const filterType = (category) =>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };

//  Filter by price

const filterByPrice = (price) =>{
    setFoods(
        data.filter((item) =>{
            return item.price === price;
        })
    )
}

    // console.log(data);
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filte Type */}
            <div >
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap space-x-1 space-y-1'>
                    <div></div>
                    <button onClick={() => setFoods(data)} className='border rounded-xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='border rounded-xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=> filterType('pizza')} className='border rounded-xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizzas</button>
                    <button onClick={()=> filterType('salad')} className='border rounded-xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType('chicken')} className='border rounded-xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chickens</button>
                </div>
            </div>
            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full flex-wrap space-x-1 space-y-1'>
                    <div></div>
                    <button onClick={() => filterByPrice('$')} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$</button>
                    <button onClick={() => filterByPrice('$$')} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$$</button>
                    <button onClick={() => filterByPrice('$$$')} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-whiterounded-xl px-5 py-1'>$$$</button>
                    <button onClick={() => filterByPrice('$$$$')} className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$$$$</button>
                </div>
            </div>
        </div>
        {/* display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item ,index) => (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img src={item.image} alt="{item.name}" className='w-full h-[200px] object-cover rounded-t-lg' />
                <div className='flex justify-between py-4 mx-2'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        {/* <span className='bg-orange-500 text-black p-1 rounded-full'><BsFillCartFill size={20} /></span> */}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Food