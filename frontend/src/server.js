import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'

var app = express()

app.use(compression())

// Serve our static stuff like CSS
app.use(express.static(path.join(__dirname, 'public'), {index: false}))

// All routes are basically forwarded to the React Router
app.get('*', (req, res) => {
  console.log("Matching route on server side: " + req.url);
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // Hey we made it!
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html>
    <html>
    <head>
      <title>React Boot Hello</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div id="app">${appHtml}</div>
      <script src="/packed-bundle.js"></script>
    </body>
    </html>
   `
}

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})
