import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';



function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object directly
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      complete: false,
    };

    // Clone userData to avoid direct mutation
    const data = [...userData];

    // Find the assigned user and add the task to their tasks array
    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(task);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });

    // Update userData state with the modified array and save to localStorage
    setUserData(data);

    // Clear input fields
    setAsignTo('');
    setCategory('');
    setTaskDate('');
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={(e) => submitHandler(e)} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder=' Make UI Design'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='date'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To </h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='employee name '
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='design, dev, etc.'
            />
          </div>
        </div>
        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            col='30'
            rows='10'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
          ></textarea>
        </div>

        <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
