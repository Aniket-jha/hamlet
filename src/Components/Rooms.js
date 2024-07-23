import React from 'react'
import RoomCard from './RoomCard'
import Twin from "../asset/twin.png"
import Private from "../asset/private.png"
import Apartment from "../asset/apartment.png"
const Rooms = () => {
  return (
    <div className='lg:mx-16 mx-4 pb-12  ' >
            <div>
                <h3 className='font-[NeueBold] text-[2.5rem]' >Rooms</h3>
                <div className='mt-4 lg:grid grid-cols-3 grid-flow-col gap-4 xl:gap-12' >
                    <RoomCard image={Twin} title="Double Sharing" content="Discover the perfect balance of privacy and camaraderie in our double sharing rooms, designed for professionals looking for a welcoming and convenient living experience."  />
                    <RoomCard image={Private} title="Private Sharing" content="Escape to your own private haven in our private rooms, designed for individuals who value their personal space and tranquility"  />
                 
                </div>
            </div>
    </div>
  )
}

export default Rooms