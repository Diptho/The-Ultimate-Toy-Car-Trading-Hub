import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const GallerySec = () => {

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const slideImages = [
        {
            url: 'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];

    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

        </div>
    );
};

export default GallerySec;