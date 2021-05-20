import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';

class Timer extends Component {
    state = {}
    
    render() { 
        return (
            <div className = "flex">
                <TimerDisplay time = {30000} step = {1000} autostart = {false} onTick={(time) => console.log("Залишилось часу: " + time)}/>
                <TimerDisplay time = {600000} step = {2000} autostart = {true} onTick={(time) => console.log("Залишилось часу: " + time)}/>
            </div>
        );
    }
}

export default Timer;