import "./App.css";
import Mountain from "./components/Mountain";
import History from "./components/History";
import Team from "./components/Team";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mountain />}/>
          <Route path='/history' element={<History/>} />
          <Route path='/team' element={<Team/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
