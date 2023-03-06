import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
