import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todo.action';

const Home = () => (
  <div>
    <h1>React Boilerplate</h1>
    <h1>Welcome to React Boilerplate</h1>
  </div>
);

const Home = ({ todos, dispatch }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add TODO</button>
      </form>

      {todos.map((todo, i) => (
        <p key={i}>
          {i + 1} - {todo}
        </p>
      ))}
    </div>
  );
};

function mapStateToProps({ todos }) {
  console.log(todos);
  return { todos };
}

export default connect(mapStateToProps)(Home);
