import React,{useEffect, useState} from 'react';
import Task from './Task';

const Home = () => {

  const [tasks,setTasks]=useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]);
  const [title, setTitle]= useState("");
  const [discription,setDiscription] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    setTasks([...tasks, {title,discription}]);
    setTitle("");
    setDiscription("");

  };

  const deleteTask =(index) =>{
    const filterArr = tasks.filter((val,i)=>{
      return i!== index;
    });
    console.log(filterArr);
    setTasks(filterArr);

  };

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  return (
    <div className='container'>
        

        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Write your Plan' value={title} onChange = {(e)=>
            setTitle(e.target.value) } />
            <input type="textarea" placeholder="Discrib it"  value={discription} onChange={(e)=>
              setDiscription(e.target.value)}  />
            <button className='btn' type= "submit">ADD</button>

        </form>
        {tasks.map((item,index) =>(
            <Task key={index} 
            title={item.title} 
            discription={item.discription}
            deleteTask={deleteTask}
            index={index} />
        ))}
    </div>
  )
}

export default Home