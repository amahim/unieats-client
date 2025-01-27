import React from 'react';
import { Outlet } from 'react-router-dom';

const MainGround = () => {
    return (
        <div className='w-4/5 mx-auto pb-10 min-h-screen'>
            <Outlet/>
        </div>
    );
};

export default MainGround;