import React from "react";
import './TodoCounter.css';

function TodoCounter(props){
    return(
        <h2 className="TodoCounter"> Has complentado {props.completados} de {props.total} ToDos</h2>
    )
}

export {TodoCounter};