import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Project from './components/Project/Project';

function App() {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode}/>
      <Project mode={mode}/>
    </div>
  )
}

export default App;
