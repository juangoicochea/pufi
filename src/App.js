import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
