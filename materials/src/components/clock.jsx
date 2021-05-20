import React from 'react';
import { Ticker } from "./ticker";
import { Buddy } from "./buddy"

export const Clock = class Clock extends React.Component {
  //! объявляем внутреннее состояние нашего компонента
  constructor(props) { 
    super(props)

    this.state = {
      opern: true //? при изменении данных ключа, перерендеривается весь рендер Clock, происходит апдейт всех детей компонента Clock
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(({ open }) => ({
      open: !open
    }))
  }

  render() {
    const { open } = this.state;

    return (
      <div className="clock">
        <button onClick={this.toggle}>{open ? 'Colose' : 'Open'} Clock</button>
        {open ? <Ticker name='newClock' /> : null}
        <Buddy name="Sam" />
      </div>
    );
  }
}