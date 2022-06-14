import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter((e)=> !!e.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];//filtrar de manera por cada letra
      if (!searchValue.length>=1) {
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter((e)=>{
          const todoText = e.text.toLowerCase();
          const searchtext = searchValue.toLowerCase();
          return todoText.includes(searchtext);
        })
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
     
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};