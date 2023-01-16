import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { useAppDispatch } from "../../app/hooks";
import { Card, addCard } from "../../features/cards/cardsSlice";
// import { Card } from "../../features/cards/cardsSlice";
import css from './addcard.module.scss'
const AddCard = () => {
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState<string>('');
    const [message2, setMessage2] = useState<string>('');
    const [message3, setMessage3] = useState<string>('');
    const [message4, setMessage4] = useState<string>('');
    const [message5, setMessage5] = useState<string>('');
    const [message6, setMessage6] = useState<string>('');
    const [message7, setMessage7] = useState<string>('');
    const [message8, setMessage8] = useState<string>('');
    const [message9, setMessage9] = useState<string>('');
    const [message10, setMessage10] = useState<string>('');
    const [message11, setMessage11] = useState<string>('');

    return (
        <div className={css.fdiv}>
            <div className={css.mysectioninput}>
                <input value={message} onChange={(e) => setMessage(e.target.value)} className={css.myinput} type="text" placeholder='src' />
                <input value={message2} onChange={(e) => setMessage2(e.target.value)} className={css.myinput} type="text" placeholder='titel' />
                <input value={message3} onChange={(e) => setMessage3(e.target.value)} className={css.myinput} type="text" placeholder='descrpion' />
            </div>
            <h3 className={css.myh3}>more deatels</h3>
            <div className={css.mysectioninput}>
                <input value={message4} onChange={(e) => setMessage4(e.target.value)} className={css.myinput} type="text" placeholder='kilo meter' />
                <input value={message5} onChange={(e) => setMessage5(e.target.value)} className={css.myinput} type="text" placeholder='Engine type' />
                <input value={message6} onChange={(e) => setMessage6(e.target.value)} className={css.myinput} type="text" placeholder='color' />
                <input value={message7} onChange={(e) => setMessage7(e.target.value)} className={css.myinput} type="text" placeholder='manufacturing' />
                <input value={message8} onChange={(e) => setMessage8(e.target.value)} className={css.myinput} type="text" placeholder='state' />
                <input value={message9} onChange={(e) => setMessage9(e.target.value)} className={css.myinput} type="text" placeholder='ownership' />
                <input value={message10} onChange={(e) => setMessage10(e.target.value)} className={css.myinput} type="text" placeholder='phone' />
                <input value={message11} onChange={(e) => setMessage11(e.target.value)} className={css.myinput} type="text" placeholder='masegwhtsapp' />
            </div>
            <button className={css.mybtn} onClick={() => {
                if (message === '' && message2 === '' && message3 === '' && message4 === '' && message5 === '' && message6 === '' && message7 === '' && message8 === '' && message9 === '' && message10 === '' && message11 === '') {
                    // alert('')
                }
                else {

                    const cardd: Card = {
                        id: v4(),
                        src: message,
                        titel: message2,
                        descrpion: message3,
                        kilometer: message4,
                        Enginetype: message5,
                        color: message6,
                        manufacturing: message7,
                        state: message8,
                        ownership: message9,
                        phone: message10,
                        masegwhtsapp: message11,
                    };
                    //dispatch addCard(card)
                    dispatch(addCard(cardd));
                    setMessage('')
                    setMessage2('')
                    setMessage3('')
                    setMessage4('')
                    setMessage5('')
                    setMessage6('')
                    setMessage7('')
                    setMessage8('')
                    setMessage9('')
                    setMessage10('')
                    setMessage11('')
                }
            }}>create</button>
        </div>
    );
};

export default AddCard;

// create read update delete
