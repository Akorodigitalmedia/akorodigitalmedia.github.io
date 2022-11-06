import './App.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import LoadingPage from './components/loading-page/loding-page.js'
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoadingPage></LoadingPage>
    </div>
  );
}

export default App;
