import React from 'react'

const Task = ({title,discription,deleteTask,index}) => {
  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{discription}</span>
        </div>
        <button className='btn' onClick={() =>deleteTask(index)}>-</button>
    </div>
  )
}

export default Task