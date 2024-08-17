import React, { useState, useEffect } from 'react';
import { Route, Navlink, BrowserRouter, Routes, useParams } from 'react-router-dom';

import './App.css';
import TodoView from './components/TodoListView';
import Header from './components/Header';
import Control from './components/Control';
import Home from './components/Home';

import MainStories from './components/MainStories';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import StoryView from './components/StoryView';
import Story from './components/Story';

function App() {


  // Post a todo
  // const addTodoHandler = () => {
  //   axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
  //     .then(res => console.log(res))
  // };

  return (
    <BrowserRouter>
      <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{ "width": "600px", "backgroundColor": "white", "marginTop": "15px" }} >
        < Header />
        < Control />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/story/:id" element={<StoryView />}></Route>  
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;