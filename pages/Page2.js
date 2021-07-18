import Link from 'next/link'
import styles from '../styles/Page2.module.css'
import Order from '../svg/order.svg'
import Order3 from '../svg/order3.svg'
import Map from '../svg/map.svg'

function Page2() {
    return (
        <div className={styles.page3}>
        <div className={styles.page3__container}>
           <div className={styles.head}>
           </div>
            <div className={styles.page3__body}>
            <Order ><Order3/></Order>
                <h1 className={styles.text31}>Order Placed</h1>
                <p className={styles.text32}>We’ve sent you an SMS with details of your order 
                including your confirmation code.</p>
                <span className={styles.pageDirection}>
                <p className={styles.text33}>Pickup address</p>
                <Link  href="/Map" ><p  className={styles.textlink}>Get direction</p></Link>
                </span>
                <div className={styles.page2__address}>
                <Map/>
                <p className={styles.text34}>Kenya cinema, moi avenue, nairobi kenya</p>
                </div>
           <Link href="/"><button className={styles.page3__button} >Go back to product</button></Link>
            </div>
            <div className={styles.foot}>

            </div>
            </div>
            </div>
    )
}

export default Page2
