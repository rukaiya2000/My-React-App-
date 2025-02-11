import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../Assets/images/img-9.jpg').default}
                            text="Explore the hidden waterfall deep
                            inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={require('../Assets/images/img-2.jpg').default}
                            text="Travel through the islads of Bali in a Private cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../Assets/images/img-3.jpg').default}
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={require('../Assets/images/img-4.jpg').default}
                            text="Experience Football on Top of the Himilayan Mountain"
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={require('../Assets/images/img-8.jpg').default}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Cards;
