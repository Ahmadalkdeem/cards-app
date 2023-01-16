import React from 'react'
import css from './myicon.module.scss'
import { BsFacebook, BsWhatsapp, BsInstagram, BsYoutube } from "react-icons/bs";


function Myicon() {
    return (
        <div className={css.mydiv}>
            <BsFacebook className={css.icon} />
            <BsInstagram className={css.icon} />
            <BsWhatsapp className={css.icon} />
            <BsYoutube className={css.icon} />
        </div>
    )
}

export default Myicon