import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Chat from '../svg/chat.svg'
import img from '../svg/Image1.jpeg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page1}>
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.text1}>Product details</p>
        </div>
        <div className={styles.body}>
           <Image className={styles.image} src={img} alt="" height="193px" width="232px" ></Image> 
        </div>
        <div className={styles.footer}>
            <div>
            <p className={styles.text1}>Naviforce luxury mens watch</p>
            </div>
            <div className={styles.price}>
                <div className={styles.page1__boxes}>
                <p className={styles.text2}>Price </p>
                <p className={styles.text21}>Ksh 2,100</p>
                </div>
                <div className={styles.page1__boxes}>
                <p className={styles.text2}>Promo</p>
                <p className={styles.text22}>Ksh 656</p>
                </div>
                <div className={styles.page1__boxes}>
                <p className={styles.text3}>you save</p>
                <p className={styles.text23}>Ksh 656</p>
                </div>
                <div className={styles.page1__boxes}>
                <p className={styles.text2}>Ends in</p>
                <p className={styles.text3}>5 days 11 hours</p>
                </div>
            </div>
            <div className={styles.points}>
                <p className={styles.text2} >This product qualifies for    mauzo point</p>
                <p className={styles.text24} >Learn more</p>
            </div>
            <div>
                <p className={styles.text3}>Description</p>
                <div>
                <ul>
                    <li className={styles.text2}>quality</li>
                    <li className={styles.text2}>assurance</li>
                    <li className={styles.text2}>product</li>
                    <li className={styles.text2}>watch</li>
                </ul>
                </div>
                <div>
                 <Link href="/Message"> 
                <Chat className={styles.chaticon}/></Link> 
                </div>
            </div>
           
           <div>
          
         <Link href="/Page1" ><button className={styles.button}>Buy this item</button></Link> 
          </div>
        </div>
    </div>
    </div>
  )
}
