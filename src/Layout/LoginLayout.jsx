import React from 'react';
import { Outlet } from 'react-router-dom';
import DragonNav from '../Pages/Shared/DragonNav/DragonNav';

const LoginLayout = () => {
    return (
        <div>
            <DragonNav></DragonNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;