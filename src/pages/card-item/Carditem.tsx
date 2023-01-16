import { deleteCard } from "../../features/cards/cardsSlice";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks"
import Card from 'react-bootstrap/Card';
// import { Card } from "../../features/cards/cardsSlice";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import css from './css.module.scss'
export type Cards = {
    id: string;
    src: string;
    titel: string;
    descrpion: string;
    kilometer: string;
    Enginetype: string;
    color: string;
    ownership: string;
    manufacturing: string;
    state: string
};
const CardItem = (props: Cards) => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <Card className={css.mycard}>
            <div className={`${css.icondiv}`}>

                <button
                    className="btn btn-info"
                    onClick={() => {
                        nav(`/cards/edit/${props.id}`);
                    }}
                >
                    <BsPencil />
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => {
                        Swal.fire({
                            title: "Are you sure you want to delete the card?",
                            showDenyButton: true,
                            confirmButtonText: "Yes",
                            denyButtonText: `No`,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteCard(props.id));
                                Swal.fire("Deleted!", "", "success");
                            } else if (result.isDenied) {
                                Swal.fire("Keeping the card", "", "info");
                            }
                        });
                    }}
                >
                    <BsTrash />
                </button>
            </div>
            <Card.Img className={css.myimg} variant="top" src={props.src} alt={props.src} />
            <Card.Body>
                <Card.Title>{props.titel}</Card.Title>
                <Card.Text className={css.myp}>
                    {props.descrpion}
                </Card.Text>
            </Card.Body>



            <button
                className="btn btn-success m-2"
                onClick={() => {
                    nav(`/cards/details/${props.id}`);
                }}
            >
                more detalse
            </button>
            {/* </div> */}
        </Card>

    );
};

export default CardItem;
