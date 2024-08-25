import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Search from './components/Layout/Search';

import StoryView from './components/Story/StoryView';
import ChapterView from './components/Story/Chapter/ChapterView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/story/:id" element={<StoryView />}></Route>
          <Route path="/story/:id/chapter/:cid" element={<ChapterView />}></Route>
          <Route path="story/theme/:theme" element={<Search />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;