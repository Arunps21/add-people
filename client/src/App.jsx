import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPeople from "./components/AddPeople";
import HomePAge from "./components/HomePAge";
import EditPAge from "./components/EditPAge";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePAge />} />
          <Route path="/edit/:id" element={<EditPAge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
