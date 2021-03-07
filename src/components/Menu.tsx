import {
  IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote
} from '@ionic/react';

import {useLocation} from 'react-router-dom';
import {
  homeOutline,
  homeSharp,
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  shirtOutline,
  shirtSharp,
  cartOutline,
  cartSharp,
  cashOutline,
  cashSharp,
  callOutline,
  callSharp,
  chevronForwardOutline
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Login',
    url: '/login',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
  {
    title: 'Register',
    url: '/register',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  },
  {
    title: 'Product',
    url: '/product',
    iosIcon: shirtOutline,
    mdIcon: shirtSharp
  },
  {
    title: 'Cart',
    url: '/cart',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Payment',
    url: '/payment',
    iosIcon: cashOutline,
    mdIcon: cashSharp
  },
  {
    title: 'Contact',
    url: '/contact',
    iosIcon: callOutline,
    mdIcon: callSharp
  }
];

const labels = ['เดรส', 'จั้ม', 'เสื้อ', 'กางเกง', 'หมวก', 'กระเป๋า'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>CTN.SUW</IonListHeader>
          <IonNote>Chantanit31137</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>รายการสินค้า</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="end" icon={chevronForwardOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
