import React from 'react';
import { Link } from 'react-router-dom';
import * as C from '../styles/common';

const Gnb = () => {
    return (
        <C.GnbBar>
            <ul>
                <li className="home active">
                    <Link to="/">홈</Link>
                </li>
                <li className="analyse">
                    <Link to="/">분석</Link>
                </li>
                <li className="community">
                    <Link to="/">나도갓생</Link>
                </li>
                <li className="mypage">
                    <Link to="/">마이페이지</Link>
                </li>
            </ul>
        </C.GnbBar>
    );
};

export default Gnb;
