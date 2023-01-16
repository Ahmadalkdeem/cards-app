import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { Card, editCard } from "../../features/cards/cardsSlice";

const EditCard = () => {

    const { id } = useParams();
    console.log(id);

    const nav = useNavigate();

    const cards = useAppSelector((state) => state.cards.cards);

    //dispatch actions:
    const dispatch = useAppDispatch();

    const cardToEdit = cards.find((c) => c.id === id);

    // const [name, setName] = useState(cardToEdit?.titel);
    // const [description, setDescription] = useState(cardToEdit?.state ?? "");
    // const [price, setPrice] = useState(cardToEdit?.kilometer ?? 0);
    // const [vegan, setVegan] = useState(cardToEdit?.descrpion);
    // const [vegetarian, setVegetarian] = useState(cardToEdit?.src);
    const [message, setMessage] = useState<string>(cardToEdit?.src ?? '');
    const [message2, setMessage2] = useState<string>(cardToEdit?.titel ?? '');
    const [message3, setMessage3] = useState<string>(cardToEdit?.descrpion ?? '');
    const [message4, setMessage4] = useState<string>(cardToEdit?.Enginetype ?? '');
    const [message5, setMessage5] = useState<string>(cardToEdit?.kilometer ?? '');
    const [message6, setMessage6] = useState<string>(cardToEdit?.ownership ?? '');
    const [message7, setMessage7] = useState<string>(cardToEdit?.color ?? '');
    const [message8, setMessage8] = useState<string>(cardToEdit?.state ?? '');
    const [message9, setMessage9] = useState<string>(cardToEdit?.manufacturing ?? '');
    const [message10, setMessage10] = useState<string>(cardToEdit?.phone ?? '');
    const [message11, setMessage11] = useState<string>(cardToEdit?.masegwhtsapp ?? '');
    if (cardToEdit === undefined) {
        return <Navigate to="/Notfoud" />;
    }

    return (
        <div className="d-flex card p-3 m-2">
            <h3>update:</h3>
            <div className="label-input d-flex flex-column">
                <label htmlFor="name">src:</label>
                <input id="name" value={message} onChange={(e) => {
                    setMessage(e.currentTarget.value);
                }}
                    placeholder="name"
                />
            </div>
            <br />
            <div className="label-input d-flex flex-column">
                <label htmlFor="description"> description:</label>
                <input id="description" value={message3} onChange={(e) => {
                    setMessage3(e.currentTarget.value);
                }}
                    placeholder="description"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="titel"> titel:</label>
                <input id="titel" value={message2} onChange={(e) => {
                    setMessage2(e.currentTarget.value);
                }}
                    placeholder="titel"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="Enginetype"> Enginetype:</label>
                <input id="Enginetype" value={message4} onChange={(e) => {
                    setMessage4(e.currentTarget.value);
                }}
                    placeholder="Enginetype"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="kilometer"> kilometer:</label>
                <input id="kilometer" value={message5} onChange={(e) => {
                    setMessage5(e.currentTarget.value);
                }}
                    placeholder="kilometer"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="ownership"> ownership:</label>
                <input id="ownership" value={message6} onChange={(e) => {
                    setMessage6(e.currentTarget.value);
                }}
                    placeholder="ownership"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="color"> color:</label>
                <input id="color" value={message7} onChange={(e) => {
                    setMessage7(e.currentTarget.value);
                }}
                    placeholder="color"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="state"> state:</label>
                <input id="state" value={message8} onChange={(e) => {
                    setMessage8(e.currentTarget.value);
                }}
                    placeholder="state"
                />
            </div>
            <br />
            <div className="label-input d-flex flex-column">
                <label htmlFor="manufacturing"> manufacturing:</label>
                <input id="manufacturing" value={message9} onChange={(e) => {
                    setMessage9(e.currentTarget.value);
                }}
                    placeholder="manufacturing"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="phone"> phone:</label>
                <input id="phone" value={message10} onChange={(e) => {
                    setMessage10(e.currentTarget.value);
                }}
                    placeholder="manufacturing"
                />
            </div>
            <div className="label-input d-flex flex-column">
                <label htmlFor="manufacturing"> masegwhtsapp:</label>
                <input id="masegwhtsapp" value={message11} onChange={(e) => {
                    setMessage11(e.currentTarget.value);
                }}
                    placeholder="masegwhtsapp"
                />
            </div>
            <br />





            <button
                className="btn btn-success"
                onClick={() => {
                    //construct the edited Card object:
                    const myupdatecard: Card = {
                        id: cardToEdit.id,
                        src: message,
                        titel: message2,
                        descrpion: message3,
                        Enginetype: message4,
                        kilometer: message5,
                        ownership: message6,
                        color: message7,
                        state: message8,
                        manufacturing: message9,
                        phone: message10,
                        masegwhtsapp: message11
                    };
                    dispatch(editCard(myupdatecard));
                    // send the user back to home page:
                    nav(-1)
                }}
            >
                סיום עריכה
            </button>
        </div>
    );
};

export default EditCard;