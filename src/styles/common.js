import styled from 'styled-components';

/*헤더*/
export const Header = styled.header`
    position: relative;
    width: 100%;
    padding: 20px 16px;
    text-align: left;

    .txtWelcome {
        display: inline-block;
        padding: 12px 24px;
        align-items: center;
        gap: 8px;
        border-radius: 16px 16px 16px 0px;
        background: var(--neutral-900, #21242e);
        font-family: 'Pretendard-Bold';
        font-size: 16px;
        color: #fff;
    }
    .signInOut {
        margin-left: 10px;
        text-decoration: underline;
    }
`;

/* 페이지 내부 헤더 */
export const PageHeader = styled.div`
    position: relative;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 121px;
    border-bottom: 0.3px solid var(--neutral-300, #d5d6d9);
    h2 {
        font-size: 20px;
        color: #21242e;
        font-family: 'Pretendard-Bold';
    }
    .btnClose {
        position: absolute;
        top: 10px;
        right: 16px;
        width: 24px;
        height: 24px;
        background: url('/images/icons/icon-close.svg') no-repeat center;
    }
    .btnPrev {
        position: absolute;
        top: 10px;
        left: 16px;
        width: 24px;
        height: 24px;
        background: url('/images/icons/icon-prev.svg') no-repeat center;
    }
`;

export const GnbBar = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #f8f8f9;
    border-top: 0.3px solid #d5d6d9;
    ul {
        display: flex;
        height: 100%;
        justify-content: center;
        gap: 21px;
        li {
            display: flex;
            align-items: center;
            width: 56px;
            font-size: 11px;
            color: #393e4f;
            justify-content: center;
            a {
                display: block;
                width: 100%;
                padding-top: 22px;
                text-align: center;
                color: #8d9996;
            }
            &.active {
                transition: 0.3s;
                a {
                    color: #393e4f;
                }
            }
            &.home {
                background: url('/images/gnb/menu-home.svg') no-repeat center 5px;
                &.active {
                    background: url('/images/gnb/menu-home-active.svg') no-repeat center 5px;
                }
            }
            &.analyse {
                background: url('/images/gnb/menu-pie.svg') no-repeat center 5px;
                &.active {
                    background: url('/images/gnb/menu-pie-active.svg') no-repeat center 5px;
                }
            }
            &.community {
                background: url('/images/gnb/menu-home.svg') no-repeat center 5px;
            }
            &.mypage {
                background: url('/images/gnb/menu-user.svg') no-repeat center 5px;
            }
        }
    }
`;

export const AddPost = styled.div`
    position: fixed;
    bottom: 70px;
    right: 10px;
    width: 56px;
    height: 56px;
    background: #d5ff66;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    border-radius: 200px;
    text-align: center;
    line-height: 56px;
    z-index: 100;
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
    span {
        font-size: 22px;
        color: #21242e;
    }
`;

export const TabInner = styled.div`
    padding: 4px 6px;
    background: #f8f8f9;
    display: flex;
    border-radius: 8px;
    width: calc(100% - 32px);
    margin: 0 auto;
    background-color: #fff;
    button {
        display: block;
        width: 50%;
        height: 28px;
        font-size: 14px;
        color: #aaacb3;
        font-family: 'Pretendard-Bold';
        &.active {
            background: #21242e;
            color: #fff;
            box-shadow: 0px 1px 3px rgba(213, 255, 102, 0.16);
            border-radius: 6px;
        }
    }
    &.gapTop {
        margin-top: 12px;
    }
`;
