import { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {AddTodoAction} from './actions/TodoActions';
 
import './App.css';


function App() {

  const [todo, setTodo]=useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos }= Todo ;

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }


  return (
    <div className="App">
     <header className='App-header'>
      <h2>Todo list App in Redux</h2>
      <form  onSubmit={handleSubmit}>
        <input placeholder="Enter a Todo" 
        style={{
          width: '350px',
          padding: '10px',
          borderRadius: '20px',
          border: "none",
          fontSize:20,
        }}
        onChange={(e) =>setTodo(e.target.value)}
        />
        <button 
        type="submit"
        style={{
          padding: '12px',
          borderRadius: '25px',
          fontSize:'15',
          marginLeft:'20px'
          }}
          >
            Go
        </button>
      </form>
      <ul className='allTodos'>
         {
          todos && todos.map((t)=>(
            <li key={t.id} className='singleTodo'>
            <span className="todoText">{t.todo}</span>
            <button style={
            {
              borderRadius: '25px',
              padding: '5px',
              border:"1px solid white",
              color:'white',
              backgroundColor:'#9fbbd8',
            }
            }
        >
          Delete
        </button>
      </li>
          ))
        } 
      
    </ul>
  </header>
    </div>
  );
}

export default App;
