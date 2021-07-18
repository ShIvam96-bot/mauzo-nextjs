import React, {useState} from 'react'
import GoogleMapReact  from 'google-map-react'
import styles from '../styles/Map.module.css'
import  Starts from '../svg/start.svg'
import Menu from '../svg/menu.svg'
import Logo from '../svg/logo2.svg'
import  Car from '../svg/car.svg'
import  Train from '../svg/train.svg'
import  Cycle from '../svg/cycle.svg'
import  Bike from '../svg/bike.svg'
import  Man from '../svg/man.svg'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <Icon icon={locationIcon} className={styles.pinicon} />
    <p className={styles.pintext}>{text}</p>
  </div>
)

const location = {
    address: 'Kenya cinema, moi avenue, nairobi kenya',
    lat: 1.2834,
    lng: 36.8235,
  }
        const Map = () => {
            return(
                <div className={styles.map__container}>
            <div className={styles.map}>
              <div className={styles.map__header}>
                <div className={styles.map__input1}>
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/location-off.png" className={styles.img}/>
                    <input className={styles.input1} type="text" defaultValue="Your Location" />
                </div>
                <div className={styles.map__input2}>
                   <Logo className={styles.map__logo}/>
                    <input className={styles.input2} type="text" defaultValue={location.address} />
                </div>
                <div className={styles.map__icons}>
                    <Car className={styles.map__icon} /> 
                    <Bike className={styles.map__icon}/> 
                    <Train className={styles.map__icon}/> 
                    <Man className={styles.map__icon}/>
                     <Cycle className={styles.map__icon}/>
            </div>
              </div>
          <div className={styles.map__body}>
          <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyAXc3RD56RSxyawGtJi4_Y_6J36TEvsmng'}}
                  defaultCenter={location}
                  defaultZoom={17}
                  initialCenter={{ lat: 47.444, lng: -122.176}}
                >
                  <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                 />
                </GoogleMapReact>
          </div>
          <div className={styles.map__footer}>
              <div className={styles.distance}>
            <p className={styles.map__text1}>3 min (1 km)</p>
            <p className={styles.map__text2}>Fastest route now due to traffic conditions</p>
            </div>
            <div className={styles.map__start}>
               <Menu className={styles.map__menu} />
                <p  className={styles.map__text3}>STEPS & MORE</p>
                <Starts className={styles.map__navigation} />
            </div>
          </div>
            </div>
            </div>
          )
            }

export default Map
