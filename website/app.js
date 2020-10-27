'use strict'
const express = require('express')
const app = express()
const staticsURL = process.env.STATICS_URL;

app.get('/', (req, res) => 
  res.send(`<div style='background-image: url(${staticsURL}/tom.jpg); background-repeat: no-repeat; background-size: cover; background-position: center; height: 100%; width: 100%;'><h1 align=center>Hello, I am sleepy Tom</h1></div>`))

module.exports = app