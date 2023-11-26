import React, { useReducer } from 'react'

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: "5"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setName":
            return {...state, name: action.payload, text: DEFAULT_FORM_VALUE.text, rating: DEFAULT_FORM_VALUE.rating };
        case "setText": 
            return {...state, text: action.payload };
        case "setRating": 
            return { ...state, rating: action.payload };
        default: 
            return state;
    }
}

const FormReveiew = () => {

    const [formVaue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    console.log(formVaue);

  return (
    <form>
        <div>
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" value={formVaue.name} onChange={(e) => dispatch({type: "setName", payload: e.target.value})} />
        </div>
        <br />
        <div>
            <label htmlFor="text">Text</label><br />
            <textarea name="text" id="text" cols="30" rows="10" value={formVaue.text} onChange={(e) => dispatch({type: "setText", payload: e.target.value})}></textarea>
        </div>
        <br />
        <div>
            <label htmlFor="rating">Rating</label><br />
            <input step="0.5" min="1" max="5" id="rating" type="number" value={formVaue.rating} onChange={(e) => dispatch({type: "setRating", payload: e.target.value})} />
        </div>
    </form>
  )
}

export default FormReveiew