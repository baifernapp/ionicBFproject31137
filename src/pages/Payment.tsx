import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react'
import './Page.css';

const Payment: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Payment</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                การชำระเงิน
            </IonContent>
        </IonPage >
    );
};
export default Payment;