import React from 'react';
import {
  HashRouter, // Instead of BrowserRouter, for deploying on gh-pages
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;