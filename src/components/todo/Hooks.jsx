import './Hooks.css';
import { useState, useRef, useReducer, useEffect }  from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count = 1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default:
            return state;

    }
}

const Hooks =() => {
    useEffect(() => {

        // axios .get("https://jsonplaceholder.typicode.com/comments")
        // .then((response) => {
        //     setData(response.data[0].email)
        // });
    },[]);
    

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

    return(
        <div className='hook-main'>
            <h2>{state.count}</h2>
            <button onClick={() =>{
            dispatch({type: "INCREMENT"});
            dispatch({type: "toggleShowText"});
            }}>click me </button>

            {state.showText && <p>This text</p>}
        </div>
     );
}

export default Hooks;