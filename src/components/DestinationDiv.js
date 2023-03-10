import React from 'react';
import Card from './Card';

export default function DestinationDiv(props) {
    const { title, data } = props;
    
    const attractions = data.filter(data => data.type === 'site')
                        .map(item => createCard(item));

    const activities = data.filter(data => data.type === 'activity')
                        .map(item => createCard(item));

    const foodAndDrink = data.filter(data => data.type === 'food' || data.type === 'drinks')
                        .map(item => createCard(item));

    function createCard(item) {
      return(
        <Card 
          key={item.id}
          {...item}
        />
      )
    }
    
    return(
        <div className='destination-div'>
          <h1 className='destination-header'>{title}</h1>
          <div>
            <h3>Attractions</h3>
            <div className='category-div'>
              {attractions}
            </div>
          </div>
          {activities.length > 0 && <div>
           <h3>Activities</h3>
            <div className='category-div'>
              {activities}
            </div>
          </div>}
          <div>
            <h3>Restaurants and bars</h3>
            <div className='category-div'>
              {foodAndDrink}
            </div>
          </div>
        </div>
    )
}