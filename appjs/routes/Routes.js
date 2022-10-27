
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
  })  

  router.get('/educacion', (req, res) => {
    res.render('educacion')
  })  

  
  router.get('/habilidades', (req, res) => {
    res.render('habilidades')
  })  

  module.exports=router;
