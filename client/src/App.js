import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";

import Register from "./Pages/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./AddMovie/Add";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoutes";
import MovieCard from "./Pages/MovieCard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/MovieCard" element={<MovieCard />} />
        <Route
          path="/MovieCard"
          element={
            <PrivateRoute>
              <MovieCard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
