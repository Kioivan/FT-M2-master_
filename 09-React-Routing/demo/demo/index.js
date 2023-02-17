import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';

function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
};

const Root = (
  {}
);

render(Root, document.querySelector('#app'));

