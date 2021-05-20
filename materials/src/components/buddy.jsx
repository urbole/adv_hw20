import React from 'react';

//! если внутри React.PureComponent нет изменений,
//! то родитель этого компонента при ререндеренге этот компонент не обновит,
//! как это происходит с React.Component 
export const Buddy = class Buddy extends React.PureComponent {
  render() {
    console.count('render buddy');

    return (
      <div>Hello, I’m your buddy! My name is {this.props.name}</div>
    )
  }
}

//! использование функции вместо React.PureComponent
//? тупой компонент, обновляется тогда, когда обновляется его пропс;
//? не может содержать сво стейт
export const Buddy = (props) => {
  return (
    <div>Hello, I’m your buddy! My name is {props.name}</div>
  )
}

//*******************************************************************************
import React from 'react'

export const Buddy = (props) => {
  React.useState()

  return (
    <div>Hello, I’m your buddy! My name is {props.name}</div>
  )
}

//*******************************************************************************

//! тупой компонент становится умным со своим стейтом, но являющийся обычной функцией
import React, { useEffect, useState } from 'react'

export const Buddy = (props) => {
  const [state, setState] = useState(0); //? возвращает массив!!! с двумя элементами: 
  //? 1й - сам стейт и 2й - функция что может менять этот стейт 

  // console.log('🚀 ~ state', state);
  // console.log('🚀 ~ setState', setState);

  //! управление стейтом в тупом компоненте
  const increse = () => {
    setState(prevState => prevState + 1);
  }

  //! реализация жизненного цикла
  //! как управлять этой функцией в нужный момент ее жизненого цикла
  //? принимает в себя два аргумента, функцию колбэк которая будет запускаться каждый раз когда когда обновляется компонент
  useEffect(() => {

  }, []); //? второй аргумент массив, благодаря его наличию колбэк не будет перезапускаться

  return (
    <div className="buddy">
      <span>Hello, I’m your buddy! My name is {props.name}</span>
      <button onClick={increse}>You clicked me {state} tmes</button>
    </div>
  )
}
