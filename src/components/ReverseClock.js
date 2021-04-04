import React, { useState, useEffect } from 'react';
import './ReverseClock.less';

const padDoubleDigits = num => num < 10 ? `0${num}` : `${num}`;

function ReverseClock() {
  const [clockRunning, setClockRunning] = useState(true);
  const [clockTime, setClockTime] = useState(new Date());
  const [decrementBySecs, setDecrementBySecs] = useState(1);

  useEffect(() => {
    if(!clockRunning) {
      return;
    }
    const interval = setInterval(() => {
      setClockTime(clockTime => new Date(clockTime.getTime() + decrementBySecs * -1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [clockRunning, decrementBySecs]);

  const hours = padDoubleDigits(clockTime.getHours());
  const minutes = padDoubleDigits(clockTime.getMinutes());
  const seconds = padDoubleDigits(clockTime.getSeconds());

  return (
    <div className="reverse-clock">
      <input type="range" min="1" max="60" step="1" value={decrementBySecs} onChange={ev => setDecrementBySecs(ev.target.value)}></input>
      <div className="reverse-clock__input-description">
        Decrementing by {decrementBySecs} every second.
      </div>
      <div className="reverse-clock__digits">
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div className="reverse-clock__buttons">
        <button onClick={() => setClockRunning(running => !running)}>{clockRunning ? 'Pause' : 'Continue'}</button>
        <button onClick={() => setClockTime(new Date())}>Reset</button>
      </div>
    </div>
  );
}

export default ReverseClock;
