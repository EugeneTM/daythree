import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Я" surname="Not me" link="https://www.secnrs.ru" />
        <SayFullName name="Я1" surname="Not me4" link="https://www1.secnrs.ru" />
        <SayFullName name="Я2" surname="Not me3" link="https://www2.secnrs.ru" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>My name {props.name}, фамилия - {props.surname}.</h1>
      <a href={props.link}>Мой профиль</a>
    </div>
  )
}

export default App;
