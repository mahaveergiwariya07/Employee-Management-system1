import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard(props) {
  return (
    <div id='tasklist' className='h-screen w-full p-7'>
        <Header changeUser={props.changeUser} /> 
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard