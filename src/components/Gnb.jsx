import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as C from '../styles/common';

const Gnb = () => {
    const location = useLocation();
    return (
        <C.GnbBar>
            <ul>
                <li className={`home ${location.pathname == '/' && 'active'} `}>
                    <Link to="/">홈</Link>
                </li>
                <li className={`analyse ${location.pathname == '/analysis' && 'active'} `}>
                    <Link to="/analysis">분석</Link>
                </li>
                <li className="community" onClick={() => alert('준비중입니다.')}>
                    <Link to="/">나도갓생</Link>
                </li>
                <li className="mypage" onClick={() => alert('준비중입니다.')}>
                    <Link to="/">마이페이지</Link>
                </li>
            </ul>
        </C.GnbBar>
    );
};

export default Gnb;
