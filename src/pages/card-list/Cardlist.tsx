import { useAppSelector } from "../../app/hooks";
import CardItem from "../card-item/Carditem";
import css from './css.module.scss'
import { Card } from "../../features/cards/cardsSlice";
import { useState } from "react";
import AddCard from "../../components/Addcard/Newcard";
const CardList = () => {
    //get all the cards from the store and show them?
    // החנות יכולה להכיל מידע של כל הקומפוננטות באתר   - נבחר מה שאנו רוצים להציג
    const cards = useAppSelector((s) => s.cards.cards);
    const [serahre, setserahre] = useState<string>('');
    return (
        <>
            <AddCard />
            <div className={css.mysection1}>
                <input value={serahre} onChange={(event) => setserahre(event.target.value)} className={css.myinput} type="text" placeholder='serahe...' />
                <div className={css.mysection}>
                    {cards.filter((val: Card) => {
                        if (serahre === '') {
                            return val
                        } else if (val.titel.toLowerCase().includes(serahre.toLowerCase()) || val.color.toLowerCase().includes(serahre.toLowerCase())) {
                            return val
                        }
                    }).map((card) => (
                        <CardItem {...card} key={card.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardList;
