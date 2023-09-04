import { useParams } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({data}) => {

const {name, country, image, description, _id} = data
// const City = () => {
//     const {id} = useParams()
// }
    return (
        <div className="w-[16rem] h-[28rem] bg-black bg-opacity-75 border border-fuchsia-400 rounded-lg m-1 flex flex-col">
        
            <img className="rounded-t-lg w-full h-[12rem] " src={image} alt="" />
       
        <div className="p-2 flex flex-col items-center ">
            
                <h5 className="text-xl font-bold text-white text-center">{name}</h5>
                <h5 className="mb-1 text-base font-bold text-white text-center">{country}</h5>
            
                        <p className="mb-3 font-normal text-white text-sm text-center">{description}</p>
            <a href={"/cities/" + _id} className="items-center px-3 py-2 text-sm font-medium  text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300" >
                Read more
            </a>
         
        </div>
    </div>
    )
    }

export default Card