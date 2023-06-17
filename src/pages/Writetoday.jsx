import React, { useState } from 'react';
import { MainApi } from '../shared/api';
import { useCookies } from 'react-cookie';

function Writetoday() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [selectedButtons, setSelectedButtons] = useState({
        emotion: null,
        howEat: Boolean,
        gymDay: Boolean,
        goodSleep: Boolean,
    });

    const handleButtonClick = (buttonName, buttonValue) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [buttonName]: buttonValue,
        }));
    };

    const handleSave = () => {
        try {
            const data = {
                emotion: selectedButtons.emotion,
                howEat: selectedButtons.howEat,
                gymDay: selectedButtons.gymDay,
                goodSleep: selectedButtons.goodSleep,
                // emotion: 'happy',
                // howEat: true,
                // didGym: true,
                // goodSleep: true,
            };

            const response = MainApi.saveData(cookies.token, data);

            // Handle the response as needed
            console.log('피드 작성이 완료되었습니다', response);
        } catch (error) {
            // Handle errors
            console.log('피드 작성 실패', error);
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleSave}>저장</button>
            </div>
            <div>
                <div>나의 컨디션</div>
                <div className="flex justify-around">
                    <button
                        id="happy"
                        className={`rounded-full ${selectedButtons['emotion'] === 'happy' ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('emotion', 'happy')}
                    >
                        🤩 기쁜 날
                    </button>
                    <button
                        id="good"
                        className={`rounded-full ${selectedButtons['emotion'] === 'good' ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('emotion', 'good')}
                    >
                        😊 편안한 날
                    </button>
                    <button
                        id="soso"
                        className={`rounded-full ${selectedButtons['emotion'] === 'soso' ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('emotion', 'soso')}
                    >
                        😐 그냥 그런 날
                    </button>
                    <button
                        id="tired"
                        className={`rounded-full ${selectedButtons['emotion'] === 'tired' ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('emotion', 'tired')}
                    >
                        🥱 피곤한 날
                    </button>
                    <button
                        id="stress"
                        className={`rounded-full ${selectedButtons['emotion'] === 'stress' ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('emotion', 'stress')}
                    >
                        😡 스트레스 받는 날
                    </button>
                </div>
            </div>
            <div>
                <div>꽤 건강한 음식 위주로 먹었다.</div>
                <div className="flex justify-around">
                    <button
                        id="howEatO"
                        className={`rounded-full ${selectedButtons['howEat'] === true ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('howEat', true)}
                    >
                        O
                    </button>
                    <button
                        id="howEatX"
                        className={`rounded-full ${selectedButtons['howEat'] === false ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('howEat', false)}
                    >
                        X
                    </button>
                </div>
            </div>
            <div>
                <div>운동했다.</div>
                <div className="flex justify-around">
                    <button
                        id="gymDayO"
                        className={`rounded-full ${selectedButtons['gymDay'] === true ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('gymDay', true)}
                    >
                        O
                    </button>
                    <button
                        id="gymDayX"
                        className={`rounded-full ${selectedButtons['gymDay'] === false ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('gymDay', false)}
                    >
                        X
                    </button>
                </div>
            </div>
            <div>
                <div>꿀잠 자고 개운한 날이다.</div>
                <div className="flex justify-around">
                    <button
                        id="goodSleepO"
                        className={`rounded-full ${selectedButtons['goodSleep'] === true ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('goodSleep', true)}
                    >
                        O
                    </button>
                    <button
                        id="goodSleepX"
                        className={`rounded-full ${selectedButtons['goodSleep'] === false ? 'bg-gray-300' : ''}`}
                        onClick={() => handleButtonClick('goodSleep', false)}
                    >
                        X
                    </button>
                </div>
            </div>
            <div>
                <div>식단 사진 업로드</div>
                <div>사진등록 (최대 5장)</div>
                <input type="file" />
            </div>
        </div>
    );
}

export default Writetoday;
