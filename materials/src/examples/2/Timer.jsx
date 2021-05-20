import React, { useState, useEffect, useRef } from "react";

export const Timer = (props) => {

  const [time, setTime] = useState(props.time);
  let [autostart, setAutostart] = useState(props.autostart);
  const [step] = useState(props.step);

  let timerLine = useRef({ width: '100%' });

  const togglePause = () => {
    if (time !== props.time && autostart) {
      props.onTimePause();
    }
    setAutostart(autostart => !autostart);
  }

  useEffect(() => {
    const ticker = setInterval(() => {
      if (time > 0 && autostart) {

        if (time === props.time) {
          props.onTimeStart();
        }

        setTime(time => time - step);

        props.onTick((time - step) / 1000);

        if (time - step === 0) {
          props.onTimeEnd();
        }

      }
    }, step);

    return () => {
      clearInterval(ticker)
    }
  }, [time, autostart, step, props]);



  return (
    <div className='timer'>
      <button className='timer-button' onClick={togglePause}>{!autostart ? 'start' : 'pause'}</button>
      <div className='timer-table'>
        {`${Math.floor(time / 1000 / 60).toString().padStart(2, '0')}:${(time / 1000 % 60).toString().padStart(2, '0')}`}
      </div>
      <div className="timer-line" style={timerLine.current = { width: time * 100 / props.time + "%" }}></div>
    </div>
  )

}