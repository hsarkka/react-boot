import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

console.log("Rendering from index.js");
render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
