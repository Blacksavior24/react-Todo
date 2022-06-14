import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  function click(){
    console.log('clic');
  }
  
  return (
    <button className="CreateTodoButton"
      onClick={click}
    >+</button>
  );
}

export { CreateTodoButton };