import express from 'express';
import models, { connectDb } from './models';
import routes from './routes';

const express = require('express')
const app = express()
const mongoose = require('mongoose');


// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set('view engine', 'ejs');

// Routes
app.use('/fizzbuzz', routes.fizzbuzz);
app.use('/helloworld', routes.helloworld);
app.use('/todos', routes.todos);


// Database Server MongoDb Setup

mongoose.connect('mongodb://localhost/PaulTMaack', { useNewUrlParser: true });