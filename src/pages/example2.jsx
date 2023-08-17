import React, { useEffect, useRef, useState } from "react";

function Example2() {
  const startTime = useRef(0);
  const intervalId = useRef(0);
  const [timer, setTimer] = useState(startTime.current);

  const handleStartBtnClick = () => {
    startTime.current = Math.floor(Date.now() / 1000);
    startTimer();
  };

  const handleStopBtnClick = () => {
    clearInterval(intervalId.current);
    setTimer(0);
    intervalId.current = 0;
  };

  const startTimer = () => {
    setTimer(Math.floor(Date.now() / 1000) - startTime.current);

    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    intervalId.current = id;
  };

  useEffect(() => {
    window.addEventListener("focus", (e) => {
      console.log("focused");

      if (intervalId.current !== 0) {
        clearInterval(intervalId.current);
        startTimer();
      }
    });
    // window.addEventListener("blur", (e) => {});

    return () => {
      window.addEventListener("focus", null);
      window.addEventListener("blur", null);
    };
  }, []);

  return (
    <div className="container">
      <h1>Timer Test2</h1>
      <p className="help">
        ※ 테스트 방법 : 별도의 스탑 워치와 타이머 시작 버튼을 동시에 누르고,
        <br /> 창을 최소화하거나 다른 탭으로 이동 한 뒤 적어도 2분 ~ 3분 후에
        스탑 워치와 현재 창의 초를 비교합니다.
      </p>
      <button onClick={handleStartBtnClick}>타이머 시작</button>
      <button onClick={handleStopBtnClick}>타이머 종료</button>
      <p>현재 초(s) : {timer}</p>
    </div>
  );
}

export default Example2;
