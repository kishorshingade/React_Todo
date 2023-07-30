import React from 'react'

const Todo = ({title,des,index,remove}) => {
    return (
       <>
      <div className='container mt-4'>

     <div>{title}</div>
     <div>{des}</div>
     <button className='btn btn-primary mt-2 float-lef' onClick={()=>remove(index)} >DELETE</button>
    </div>
       </>
    )
}

export default Todo
