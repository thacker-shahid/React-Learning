import './App.css';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import { Alert } from './components/Alert';

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message="My alert message"/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
