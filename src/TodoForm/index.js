import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    
    const onChange = (e)=>{
        setNewTodoValue(e.target.value);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
                placeholder="Una tarea :v"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}