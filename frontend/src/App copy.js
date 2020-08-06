import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleClick = () => {
    dispatch({type: 'ADD_TODO', payload: {nome: 'tchainiz'}});
  };

  return (
    <div>
      <h1>{todos.map(todo => (<p>{todo.nome}</p>))}</h1>
      <button onClick={handleClick}>teste</button>
    </div>
  );
}

export default App;
