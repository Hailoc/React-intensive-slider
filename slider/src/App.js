import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <SayFullName name="Andrey" family="Gyuttuev" link="google.com" />
      <SayFullName name="Andrey" family="Ivanov" link="ya.ru" />
      <SayFullName name="Andrey" family="Petrov" link="vk.com" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
<div>   
<h1>мое имя {props.name}, фамилия - {props.family}</h1>
<a href={props.link}> Ссылка на мой профиль </a>
</div>
    )
}

export default App;
