const express = require('express')
const next = require('next')

const bodyParser = require("body-parser")
// const jwt = require('jsonwebtoken')

// const passport = require("passport")
// const passportJWT = require("passport-jwt")

// const ExtractJwt = passportJWT.ExtractJwt
// const JwtStrategy = passportJWT.Strategy

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get('/sign-in', (req, res) => {
      return app.render(req, res, '/sign-in', req.query)
    })

    server.post('/sign-in', (req, res) => {
      console.log(req.body)
      // res.status(200).json({ status: 'success' })
      res.end('signed in!')
    })

    // server.get('/b', (req, res) => {
    //   return app.render(req, res, '/a', req.query)
    // })

    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', { id: req.params.id })
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })