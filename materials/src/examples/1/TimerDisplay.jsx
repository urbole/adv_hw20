import React, { useState, useEffect } from 'react';

const TimerDisplay = (props) => {
  const [time, setTime] = useState(props.time);
  const [isStart, setIsStart] = useState(props.autostart);

  useEffect(() => {
    
    const tiker = setInterval(() => {
      if (time > 0 && isStart) {
        setTime(time - props.step);
        props.onTick(convertTime(time - props.step));
      } else if (time === 0 && isStart) {
        setTime(time);
      } else if (time === 0 && !isStart) {
        setTime(props.time)
      } else {
        setTime(time)
      }
    }, props.step)

    return (() => {
      clearInterval(tiker)
    })

  }, [time, isStart, props])

  const toggle = () => {
    isStart ? setIsStart(false) : setIsStart(true);
  }

  function convertTime(time) {
    const min = ('0' + (Math.floor(time / 60000))).substr(-2);
    const sec = ('0' + (time / 1000 - Math.floor(time / 60000) * 60)).substr(-2);
    return min + ':' + sec;
  }

  const width = 250 - (250 - (time * 250) / props.time);

  return (
    <div className="timer-wrapper flex">
      <div className="timer-line" style={{ width: width + 'px' }}></div>
      <div className="timer-display">
        <div className="output-data flex">
          <p>Step: <span>{props.step / 1000}s</span></p>
          <p>Autostart: <span>{props.autostart ? 'true' : 'false'}</span></p>
        </div>
        <div>{convertTime(time)}</div>
      </div>
      <button onClick={toggle}>{isStart ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default TimerDisplay;