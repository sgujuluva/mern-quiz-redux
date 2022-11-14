import {Routes, Route} from "react-router-dom"
//routes
import Main from "./components/Main/Main"
import Quiz from "./components/Quiz/Quiz"
import Result from "./components/Result/Result"
import './App.css';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
