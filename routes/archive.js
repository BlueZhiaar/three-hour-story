'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');

const Episodelog = require('../models/episodelog');

router.get('/new', authenticationEnsurer, csrfProtection,(req,res,next) => {
  kouunti = saikoro();
  res.render('new', {user:req.user,csrfToken: req.csrfToken() });
});