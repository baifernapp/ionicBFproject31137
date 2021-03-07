import React from 'react';
import {
    IonSlides,
    IonSlide,
    IonContent,
    IonImg,
}
    from '@ionic/react';

type Item = {
    src: string;
    text: string;
};

const items: Item[] = [
    {
        src: './images/ionic.jpg',
        text: 'a picture of a cat '
    },

    {
        src: './images/ionic2.jpg',
        text: 'a picture of a cat '
    },

    {
        src: './images/ionic3.jpg',
        text: 'a picture of a cat '
    },
];

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const Slides: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            {items.map((image, i) => (
                <IonSlide key= {i}>
                    <IonImg src={image.src} />
                    <h1>{image.text}</h1>
                </IonSlide>
            ))
            }
        </IonSlides>
    </IonContent>
);