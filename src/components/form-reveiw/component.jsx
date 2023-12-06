import React, { useReducer } from 'react'
import { Counter } from '../counter/component';
import styles from './styles.module.scss'

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: 5
}

const RATING_STEP = 0.5;

const reducer = (state, action) => {
    switch (action.type) {
        case "setName":
            return { ...state, name: action.payload, text: DEFAULT_FORM_VALUE.text, rating: DEFAULT_FORM_VALUE.rating };
        case "setText":
            return { ...state, text: action.payload };
        case "setRating":
            return { ...state, rating: action.payload };
        default:
            return state;
    }
}

const FormReveiew = () => {
    const [formVaue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return (
        <div className={styles.formRating}>
            <div className={styles.formRatingItem}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={formVaue.name} onChange={(e) => dispatch({ type: "setName", payload: e.target.value })} />
            </div>
            <div>
                <label htmlFor="text">Text</label>
                <textarea name="text" id="text" value={formVaue.text} onChange={(e) => dispatch({ type: "setText", payload: e.target.value })}></textarea>
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <Counter value={formVaue.rating}
                    increment={() =>
                        dispatch({ type: 'setRating', payload: formVaue.rating + RATING_STEP })}
                    decrement={() =>
                        dispatch({ type: 'setRating', payload: formVaue.rating - RATING_STEP })}
                    min="1"
                    max="5" />
            </div>
        </div>
    )
}

export default FormReveiew