
// import React from 'react';

//! Ticker в виде React.Component
export const Ticker = class Ticker extends React.Component {

  //! в 16й версии реакта конструктор можно скипнуть, пропустить
  //? основная потребность в объявлении конструктора здесь, это установка стартовых значений

  constructor(props) { //? хук жизненного цикла, всегда принимает в себя один аргумент пропс 
    super(props)
    console.log('constructor - запускается первым')

    this.state = { //? сделать начальное состояние компонента
      date: new Date()
    }
    //? привязать методы которые будем использовать в качестве колбеков
    this.handleClick = this.handleClick.bind(this) //?хендлер забиндить - жестко привязать зис к этому методу, это для нестрелочных функций
  }
  handleClick()

  shouldComponentUpdate(nextProps, nextState) { //? тоолько для очень сложных случаев, 
    if (nextState.date.getSeconds() > 10) { //? когда нужно оптимизировать работу дочерних компонентов
      return false
    }

    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) { //? отслеживание и использование изменений
    if (prevState.date !== this.state.date)
      console.log("Our component updatet")
  }

  componentDidMount() {
    //? Нужен что бы организовать/создать: подписку; запрос на сервер за данными;
    //? навесить счетчик; вычисления на базе ДОМа что уже вставлен в браузер!
    //? Вызывается один раз когда компонент запускается в первый раз
    console.log('mounted - запускается четвертым')

    this.ticker = setInterval(() => {
      console.log('tick') //? при отключении часов, уделения часов из ДОМа, сэтИнтервал все равно работает
      this.setState(state => ({
        date: state + new Date()  //? функция что новый стейн обработав предыдущее состояние стейта
      }))

      this.setState({  //? объект с стейтом что подходит для данного примера
        date: new Date()
      }
        , (prevState) => {  //! второй аргумент сэтСтейта, prevState принимает в себя только что обновленное состояние стейта
        } //! и на базе этого обновления можно сделать еще одно изменение, пошагово друг за другом
      )
    }, 1000);
  }

  componentWillUnmount() { //? метод срабатывает при выходе компонента из componentDidMount из ДОМа
    clearInterval(this.ticker)
  }

  render() {
    console.log('render - запускается вторым')
    console.count("render ticker")
    return (
      <time>{this.state.date.toLocaleTimeString()}</time>
    );
  }
}

//*******************************************************************************

//! Ticker в виде тупого компонента с хуками
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

export const Ticker = ({ name }) => {
  const [current, setCurrent] = useState(new Date());

  const tickCounts = useRef(0); //? изменение useRef не вызовет useEffect, сервисная информация
  //? это всегда объект, такой себе сосуд с данными что будет сохраняться между перезапусками функции

  const tickRef = useRef();

  const handleClick = () => { //? чистый обработчик событий
    console.log(tickCounts.current)
  }


  // const handleClick = useCallback(() => { //? обработчик событий с хуком
  //   console.log(tickCounts.current)
  //   //! https://www.youtube.com/watch?v=BUuylRjqHxU 1:55:00

  // })

  // const value = useMemo(() => {
  //   return name + new Date().toLocaleTimeString()
  //   //! https://www.youtube.com/watch?v=BUuylRjqHxU 1:54:00
  // }, [name])


  useEffect(() => { //? запускается тогда, когда элемент уже находится на странице, асинхронен по своей природе
    console.log('mounted');
    console.count('effect');
    console.log(tickRef.current);
    console.log(value);

    const ticker = setInterval(() => {
      setCurrent(new Date());
      tickCounts.current += 1;
    }, 1000)
    return () => {
      console.log('unMounted');
      clearInterval(ticker);
    }
  }, [setCurrent])

  useLayoutEffect(() => { //? подобен useEffect, но запускается синхронно, до появления элемента в ДОМе
    //? с его помощью можем измерять элемент на странице; изменять его скрол позицию; сделать его меньше/больше;
    //? спозиционировать его на странице
    //? юзер не увидит бликов, отрисовывается уже готовый элемент
    //? тут не должно быть много сложных вычислений, создаст задержку при рендере
  })

  return (
    <div className="count">
      <time ref={tickRef}>{current.toLocaleTimeString()}</time>
      <button onClick={handleClick}>Show Ticks Count</button>
    </div>
  );
}