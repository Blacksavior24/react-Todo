import React from 'react';
import './CreateTodoButton.css';
import {TodoContext} from '../TodoContext'

function CreateTodoButton() {
  const {setOpenModal, openModal} = React.useContext(TodoContext);
  function click(){
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }
  
  return (
    <button className="CreateTodoButton"
      onClick={click}
    >+</button>
  );
}

export { CreateTodoButton };