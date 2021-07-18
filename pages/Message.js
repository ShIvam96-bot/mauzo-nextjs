import React, {useState} from 'react'
import styles from '../styles/Message.module.css'
import Arrow from '../svg/arrow.svg'
import Image from 'next/image'
import img from '../svg/Image1.jpeg'
import Send from '../svg/send.svg'

function Message() {
    const [chat , setChat] = useState("");
    return (
        <div className={styles.message}>
        <div className={styles.message__container}>
            <div className={styles.message__header}>
                <div className={styles.header__logo}>
                <Arrow />
                </div>
                <div className={styles.header__person}>
                <div className={styles.header__image}>
                    <Image className={styles.personimage} src={img} alt=""  />
                    </div>
                <div className={styles.header__names}>
                    <p className={styles.header__text1}>Grace</p>
                    <p className={styles.header__text2}>Customer Service Rep</p>
                </div>
                </div>
            </div>
            <div className={styles.message__body}>

            </div>
            <div className={styles.message__footer}>
                <input className={styles.footer__input} type="text" placeholder="Reply to Grace.."
                value={chat} onChange={(e) => setChat(e.target.value)} />
                <Send className={styles.sendbutton} />
            </div>
        </div>
        </div>
    )
}

export default Message