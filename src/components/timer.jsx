import React, { useEffect, useState, useRef } from "react";


export const Timer = (props) => {

  const [time, setTime] = useState(props.time);
  const [isAutoStart, setIsAutoStart] = useState(props.autostart);
  const [step] = useState(props.step);

  const toggle = () => {
    isAutoStart ? setIsAutoStart(false) : setIsAutoStart(true);
  }

  useEffect(() => {

    const ticker = setInterval(() => {

      if (time > 0 && isAutoStart) {
        setTime(time => time - step);
        props.onTick((time - step) / 1000);
      } else if (time === 0 && isAutoStart) {
        setIsAutoStart(props.autostart);
        setTime(props.time);
      }

    }, step)

    return () => {
      clearInterval(ticker)
    }
  }, [time, isAutoStart, step, props]);

  let progressLine = useRef({ width: '100%' });


  return (
    <div className="wrap_timer">
      <button className="btn_timer" onClick={toggle}>{!isAutoStart ? 'Start ' : 'Pause '}timer</button>
      <div className="wrap_counter">
        <time className="counter">
          {`${('0' + (Math.floor(time / 60000))).substr(-2)} : ${('0' + (time / 1000 - Math.floor(time / 60000) * 60)).substr(-2)}`}
        </time>
      </div>
      <div className="wrap_progress">
        <div className="progress" style={progressLine.current = { width: time * 100 / props.time + "%" }}></div>
      </div >
    </div>
  );
}