import {Routes, Route} from "react-router-dom"
//routes
import Main from "./components/Main"
import Quiz from "./components/Quiz"
import Result from "./components/Result"
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Quiz app</h1>
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
