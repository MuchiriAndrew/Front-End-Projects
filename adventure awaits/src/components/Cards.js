import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out These EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">

                    <CardItem 
                    src= "images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the amazon jungle"
                    label="Adventure"
                    path= "/services"
                    />

                     <CardItem 
                    src= "images/img-2.jpg"
                    text="Travel through the islands of Bali in a private cruise"
                    label="Luxury"
                    path= "/services"
                    />
                </ul>

                <ul className="cards__items">

                    <CardItem 
                    src= "images/img-3.jpg"
                    text="Set sail in the Atlantic Ocean visiting uncharted waters"
                    label="Mystery"
                    path= "/services"
                    />

                     <CardItem 
                    src= "images/img-4.jpg"
                    text="Experience footabll on top of the Himalayan"
                    label="Adventure"
                    path= "/services"
                    />

                    <CardItem 
                    src= "images/img-8.jpg"
                    text="Ride through the Sahara on a guided camel tour"
                    label="Adrenaline"
                    path= "/services"
                    />

                </ul>


            </div>
        </div>

    </div>
  )
}

export default Cards