import React,{useState} from 'react' 
import Link from 'next/link'
import styles from '../styles/Page1.module.css'
import Backbutton from '../svg/backbutton.svg'
import Discount from '../svg/discount.svg'
import Line from '../svg/line.svg'
import Map from '../svg/map.svg'

function Page1() {

    const [number , setNumber] = useState("");
    const [name , setName] = useState("");

    return (
        <div className={styles.page2}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                <Backbutton className={styles.logo}/>
            <h2 className={styles.text1}>Checkout</h2>
            </div>
            </div>
            <div className={styles.body}>
                <div className={styles.order}>
                <h2 className={styles.text1}>Order summary</h2>
                <div className={styles.priceBox1}>
                    <p className={styles.text2}>subtotal</p>
                    <p className={styles.text41}>Ksh 2100</p>
                </div>
                <div className={styles.priceBox1}>
                    <p className={styles.text2}>Discount</p>
                    <p className={styles.text4}><Discount className={styles.logo2}/>Ksh -105</p>
                </div>
                <Line/>
                <div className={styles.priceBox2}>
                    <p className={styles.text3}>Total </p>
                    <br/>
                    <p className={styles.text5}> Ksh 1995</p>
                </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.page2__map}>
                    <h2 className={styles.text1}>Pickup Address</h2>
                   
                    </div>
                    <p2 className={styles.text2}><Map className={styles.maplogo}/> Kenya Cinema,Moi avenue, Nairobi</p2>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.inputContain}>
                    <p className={styles.text2}>Phone Number</p>
                    <input className={styles.inputBox} type="text" onChange={(e) => setNumber(e.target.value)} value={number} />
                </div>
                <div className={styles.inputContain}>
                    <p className={styles.text2}>Name</p>
                    <input className={styles.inputBox} type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
             <Link href="/Page2"><button className={styles.button}>Place Order</button></Link> 
            </div>
        </div>
        </div>
    )
}

export default Page1
