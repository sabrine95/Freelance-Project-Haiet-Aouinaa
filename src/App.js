import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import PagesSelector from "./pages/PagesSelector/PagesSelector";
import Chooselanguage from "./components/Chooselanguage/Chooselanguage";
import { useEffect, useState } from "react";
import Playmusic from "./components/Playmusic/Playmusic";
function App() {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);
  const [lang, setlang] = useState(1);

  return (
    <div className="App">
      <Chooselanguage lang={lang} setlang={setlang} />
      <Playmusic />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home lang={lang} setlang={setlang}  />}
          />
          <Route
            path="/:id"
            element={
              <PagesSelector lang={lang} setlang={setlang} />
            }
          />
          <Route
            path="/:id/:path"
            element={
              <PagesSelector lang={lang} setlang={setlang}  />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
