import { useState } from 'react';
import './App.css';

function App() {
  const [taskVal, setTaskVal] = useState('');
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    setTaskList((taskList) => {
      let newList = [...taskList];
      if(taskVal!='')
       {
        newList = [...taskList,taskVal];
       }
       return newList;
    })
    setTaskVal('');
  }

  function removeTask(i) {
    const newList = taskList.filter((element, id) => {
      return i!==id
    })
    setTaskList(newList);
  }

  function removeAllTask() {
    setTaskList([]);
  }

  return (
    <div className='card'>
      <p className='heading'>What are u upto Today ?</p>
      <div>
        <input type='text' className='searchBar' value={taskVal} onChange={(e) => {setTaskVal(e.target.value)}} />
        <button className='btn btn-head' onClick={addTask} >Add</button>
      </div>
      {taskList!==[] && taskList.map((data, i) => {
        return <div className='task' key={i}>
           <div className='taskName'>{data}</div>
           <button className='btn' onClick={() => removeTask(i)}>Delete</button>
        </div>
      })}
      {taskList.length>=1 && <button className='btn-alt' onClick={removeAllTask}>Remove All</button>}
    </div>
  );
}

export default App;
