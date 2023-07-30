import './App.css';
import Todo from './component/Todo';
import React from 'react';
import { useState ,useEffect } from 'react';


function App() {
  const store = localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')) : []
  const [todo, settodo] = useState(store) 
  const [title, settitle] = useState('') 
  const [des, setdes] = useState('') 

  const inputHandler = (e) =>{
   e.preventDefault()
   settodo([...todo,{
     title:title,
     des:des
   }])
   settitle('')
   setdes('')
  
  }

  const remove = (index) =>{
  const initialArr = todo.filter((val,i)=>{
    return i !== index
  })
  settodo(initialArr)
  }
  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])
  return (
    <>
    <div className="bg-info  align-items-center justify-content-center mt-4">
   <div className='container'>
    <div className='col-8' >
      <form onSubmit={inputHandler}>
     <input className='form-control mt-4' placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)} ></input>
     <input className='form-control mt-4' placeholder='Description' value={des} onChange={(e)=>setdes(e.target.value)} ></input>
     <button type='submit' className='btn btn-primary mt-2'>ADD</button>
     </form>
    </div>
    </div>
    </div>

    <div className="bg-secondary h-100 align-items-center justify-content-center mt-4">
   {
    todo.map((item,index)=>(
      <Todo
        title ={item.title}
        des = {item.des}
        remove = {remove}
        index = {index}
      />
    ))
   }
</div>
  
   </>
  )
}

export default App;
