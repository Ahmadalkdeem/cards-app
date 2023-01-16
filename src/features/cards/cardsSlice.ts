import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { meals } from "../../moke-data/cards";
export type Card = {
    id: string;
    src: string;
    titel: string;
    descrpion: string;
    kilometer: string;
    Enginetype: string;
    color: string;
    ownership: string;
    manufacturing: string;
    // myupdate: boolean;
    state: string;
    phone: string;
    masegwhtsapp: string;
};

export type CardsState = {
    cards: Card[];
};

const initialState: CardsState = {
    cards: meals,
};

//name: cards, values: cards: Card[]
//name: cards, values: cards: Card[]
export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // אילו פעולות אנו רוצים בחנות
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
        editCard: (state, action: PayloadAction<Card>) => {
            //get the card from action.payload
            const cardToEdit = action.payload;

            //find the index of the card to edit:
            const index = state.cards.findIndex((c) => c.id === action.payload.id);

            //replace the card at index with:
            state.cards[index] = cardToEdit;
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            //action.payload = id of the card to remove
            const index = state.cards.findIndex((c) => c.id === action.payload);

            //delete the card at index:
            state.cards.splice(index, 1);
        },
    },
});

// export 3 things:
//1) the slice
//2) actions
//3) reducer

//one way to export the actions: 
//export const cardActions = cardsSlice.actions;

//nicer way to export the actions:
export const { addCard, deleteCard, editCard } = cardsSlice.actions;
export default cardsSlice.reducer;
