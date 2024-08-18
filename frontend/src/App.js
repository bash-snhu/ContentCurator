import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import Add from './components/Add';
import StoryView from './components/StoryView';
import ChapterView from './components/ChapterView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/story/:id" element={<StoryView />}></Route>
          <Route path="/story/:id/chapter/:cid" element={<ChapterView />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;