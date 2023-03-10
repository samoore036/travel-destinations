import React from 'react';

export default function Card(props) {
    const { imageUrl, title, description, link, mapsLink, price } = props;

    return (
        <div className='card'>
            {typeof price === 'number' && price > 0 && <div className='price-sticker'>{`From $${price}`}</div>}
            <div className='img-div'>
                <img src={`/images/${imageUrl}`} alt='Card'/>
            </div>
            <div className='card-info'>
                <h2>{title} {typeof price === 'string' && <span>{` / ${price}`}</span>}</h2>
                <p>{description}</p>
                <div className='more-info'>
                    <a className='info-link' href={link}>More info</a>
                    <a className='maps-link' href={mapsLink}>View on Google Maps</a>
                </div>
            </div>
        </div>
    )
}