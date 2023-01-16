import { Navigate, useNavigate, useParams } from "react-router-dom"; import { useAppSelector } from "../../app/hooks";
import css from './css.module.scss'
import { BsTelephoneFill, BsWhatsapp, BsSpeedometer, BsFillFilePersonFill } from "react-icons/bs";
import { TbEngine, TbColorSwatch } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { GiCalendarHalfYear } from "react-icons/gi";
import Corsla from "./corsla/Corsla";
function CardDetails() {
    const { id } = useParams();
    const cards = useAppSelector((state) => state.cards.cards);
    const cardToEdit = cards.find((c) => c.id === id);
    if (cardToEdit === undefined) {
        return <Navigate to="/Notfoud" />;
    }
    return (
        <div className={css.cardpage}>
            <h1 className={css.myh1}>{cardToEdit?.titel}</h1>
            <div className={css.mydiv}>
                <Corsla key={cardToEdit?.id} {...cardToEdit} />
                <div className={css.divdetales2}>
                    <div className={css.divdetales3}>
                        <div className={css.myp} ><span className={css.myspan}><TbColorSwatch className={css.icon2} />color:</span>{cardToEdit?.color}</div>
                        <div className={css.myp} ><span className={css.myspan}><TbEngine className={css.icon2} /> Enginetype:</span>{cardToEdit?.Enginetype}</div>
                    </div>
                    <div className={css.divdetales3}>

                        <div className={css.myp} ><span className={css.myspan}><BsSpeedometer className={css.icon2} />kilometer:</span> {cardToEdit?.kilometer}</div>
                        <div className={css.myp} ><span className={css.myspan}><BsFillFilePersonFill className={css.icon2} />ownership:</span> {cardToEdit?.ownership}</div>
                    </div>
                    <div className={css.divdetales3}>
                        <div className={css.myp} ><span className={css.myspan}><GoLocation className={css.icon2} />state:</span> {cardToEdit?.state}</div>
                        <div className={css.myp} ><span className={css.myspan}><GiCalendarHalfYear className={css.icon2} />manufacturing:</span> {cardToEdit?.manufacturing}</div>
                    </div>


                </div>
                <p className={css.descrpion}>
                    <span className={css.myspan}>descrpion:</span>  {cardToEdit?.descrpion}
                </p>
                <div className="d-flex justify-content-center align-items-center">
                    <a target='_blank' href={`https://wa.me/972${cardToEdit?.phone}?text=${cardToEdit?.masegwhtsapp}`}>  <BsWhatsapp className={css.icon} /></a>
                    <a href={`tel:${cardToEdit?.phone}`}><BsTelephoneFill className={css.icon} /></a>
                </div>
            </div>

        </div>
    )
}

export default CardDetails