import React, { useReducer } from 'react'
import { Counter } from '../counter/component';

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
        <div className='form-rating'>
            <div>
                <label htmlFor="name">Name</label><br />
                <input id="name" type="text" value={formVaue.name} onChange={(e) => dispatch({ type: "setName", payload: e.target.value })} />
            </div>
            <br />
            <div>
                <label htmlFor="text">Text</label><br />
                <textarea name="text" id="text" value={formVaue.text} onChange={(e) => dispatch({ type: "setText", payload: e.target.value })}></textarea>
            </div>
            <br />
            <div>
                <label htmlFor="rating">Rating</label><br />
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