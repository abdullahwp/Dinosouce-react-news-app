import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes ,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react';

const App = ()=> {

  const [progress, setProgress] = useState(0)

    return (
      <div className="main">
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={6} category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={6} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={6} category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={6} category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={6} category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={6} category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App