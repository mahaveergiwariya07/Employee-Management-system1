import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-70 '>
            <div className='bg-red-800 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 font-medium'>Employee Name</h2>
                <h3 className='w-1/5 font-medium'>New Task</h3>
                <h5 className='w-1/5 font-medium'>Active Task</h5>
                <h5 className='w-1/5 font-medium'>Completed</h5>
                <h5 className='w-1/5 font-medium'>Failed</h5>
            </div>
            <div id='tasklist' className='h-[60%] overflow-auto'>
                {userData && userData.map((elem, idx) => (
                    <div key={idx} className='border-2 border-emerald-700 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 font-medium'>{elem.firstName}</h2>
                        <h3 className='w-1/5 font-medium text-blue-300'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 font-medium text-green-300'>{elem.taskCounts.complete}</h5>
                        <h5 className='w-1/5 font-medium text-red-400'>{elem.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask
