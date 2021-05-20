import React from 'react';
import { Timer } from './timer';

function TimerList() {
  return (
    <div className="wrap_timer_list">
      <Timer
        time={5000}
        step={1000}
        autostart={false}
        onTick={(time) => console.log("Залишилось часу: " + time + ' сек.')}
      />
      <Timer
        time={5998000}
        autostart={true}
        step={2000}
        onTick={(time) => console.log("Залишилось часу: " + time + ' сек.')}
      />
    </div >
  )
}

export default TimerList;