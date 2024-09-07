import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet";

import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Search from './components/Layout/Search';
import Browse from './components/Layout/Browse';

import StoryView from './components/Story/StoryView';
import ChapterView from './components/Story/Chapter/ChapterView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Helmet>
            <title>Content Curator</title>
          </Helmet>

          {/* Header */}
          <Header />

          {/* Main Content */}

          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/story/:id" element={<StoryView />}></Route>
            <Route path="/story/:id/chapter/:cid" element={<ChapterView />}></Route>
            <Route path="story/theme/:theme" element={<Search />}></Route>
            <Route path="/collection/fandoms/" element={<Browse />}></Route>

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;