import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../pages/member/Signup';
import Login from '../pages/member/Login';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Join from '../pages/member/Join';
import MyPhotos from '../pages/MyPhotos';
import PictureList from '../pages/record/PictureList';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 공통영역(상단 gnb메뉴)을 위한 Layout  */}
                <Route element={<Layout />}>
                    {/* auth */}
                    <Route path="/join" element={<Join />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                    {/* main */}
                    <Route path="/" element={<Home />} />

                    <Route path="/post" element={<MyPhotos />} />

                    <Route path="/pitureList" element={<PictureList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
