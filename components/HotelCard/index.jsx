import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loader';
import ContactForm from '../form';
import { MdLocationOn,MdCurrencyRupee } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import LocationFilter from '../Filter';
import { motion } from 'framer-motion';
import cls from "classnames";
import FormModal from '../FormModal';

 const HotelCard = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    //form modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };


//Filter
    const availableLocations = Array.from(new Set(data.map((hotel) => hotel.location)));
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
  
    const handleLocationChange = (selectedLocation) => {
      if (selectedLocations.includes(selectedLocation)) {
        setSelectedLocations(selectedLocations.filter((loc) => loc !== selectedLocation));
      } else {
        setSelectedLocations([...selectedLocations, selectedLocation]);
      }
    };
  
    useEffect(() => {
      if (selectedLocations.length === 0) {
        setFilteredData(data);
      } else {
        const filteredHotels = data.filter((hotel) =>
          selectedLocations.includes(hotel.location)
        );
        setFilteredData(filteredHotels);
      }
    }, [selectedLocations, data]);
  

    const router = useRouter();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://book-my-room.hasura.app/api/rest/Hotels",
          {
            headers:{
              "x-hasura-admin-secret": "kj83kDBJfYJU6uyNRC15d78GySN7QnPub7PVMy61khD1gx5nYphXkxXrCOy6W1g6",
            }
          }); 
          setData(response.data.Hotels); 
          setIsLoading(false);
  
          console.log({ hotelData: response.data.Hotels });
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);
   
  return (
    <div>
<h1 className='text-5xl font-bold text-black flex justify-center  items-center py-8 animate-blink'>Get best hotels at best rates!</h1>
<LocationFilter
        availableLocations={availableLocations}
        onLocationChange={handleLocationChange}
      />
      
      {selectedLocations.length!=0 &&
      (
        
        <h3 className=' flex justify-start pl-4 items-center text-2xl font-bold py-4'>Showing hotels in: {selectedLocations.join(', ')}</h3>
      )

      }
<div className='flex flex-row flex-wrap gap-[20px] justify-center items-center'>

      

{isLoading ? (
          <Loading/>
        ) : (
            filteredData.map((hotel, index) => (
        <motion.div key={index} className={cls("card w-96 bg-base-100 shadow-xl")}  whileHover={{ scale: 1.1 }}>
          <figure><img src="/static/hotel.webp" alt="Hotel" /></figure>
          <div className="card-body" >
            <h2 className="card-title">{hotel?.name}</h2>
            <p className='flex  items-center'><MdLocationOn className='text-red-500'/>{hotel?.location}</p>
            <p className='font-bold flex items-center'><MdCurrencyRupee className='text-green-400'/>{hotel.price}/-</p>
            <p className='font-bold flex items-center'><AiFillStar className='text-[#FFD700]'/> {hotel.ratings}/10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={openModal} >Book Now</button>
              
            </div>
          </div>
        </motion.div>
      ))
        )}
      </div>
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default HotelCard;