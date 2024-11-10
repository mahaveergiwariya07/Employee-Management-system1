import React from 'react';

function Header(props) {
  const firstName = props.data?.firstName || 'Admin'; // Use "Admin" if firstName is undefined

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser("");
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{firstName} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
}

export default Header;
