import React from 'react';
import {
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';
import NotFound from './NotFound';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    <Switch>
      <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} /> } />
      <Route exact path={`${match.path}/html`} component={HTML} />
      <Route exact path={`${match.path}/css`} component={CSS} />
      <Route exact path={`${match.path}/javascript`} component={JavaScript} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Courses;