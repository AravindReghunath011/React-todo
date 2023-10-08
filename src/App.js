import React, { useState } from 'react';
import './App.css';
import { Day } from './config';


function App() {
  const [toDo,setTodo] = useState('')
  const [toDos,setTodos] = useState([])
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's <Day/> 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>{
          setTodos([...toDos,{text:toDo,status:false,id:Date.now()}])
        }}></i>
      </div>
      <div className="todos">
        {toDos.map((obj)=>(
          <div className="todo" key={obj.id}>
          <div className="left">
            <input type="checkbox" value={obj.status} onChange={(e)=>setTodos(toDos.filter((obj2)=>{
              if(obj.id === obj2.id){
                obj.status = e.target.checked
              }
              console.log(obj2,'obj2')
              console.log(obj,'hehe')
              return true
            }))} name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>setTodos(toDos.filter((obj2)=>obj2.id!==obj.id))}></i>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;