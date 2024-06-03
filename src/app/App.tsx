import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <ul>
                <oi>O себе: Меня зовут Евгений, 3 года бекенд разработки + немного react </oi>
                <oi>Цели: Научиться немного в React с различными красивостями </oi>
                <oi>Немного умею в Django, celery, redis, python, docker, ci/cd, ansible, ну и кучка сетевых технологий</oi>
            </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
