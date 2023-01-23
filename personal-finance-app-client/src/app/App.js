import { Route, Routes } from "react-router-dom";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPrivateRoute from "./privateRoutes/IndexPrivateRoute";
import LoginPrivateRoute from "./privateRoutes/LoginPrivateRoute";
import RegisterPrivateRoute from "./privateRoutes/RegisterPrivateRoute";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPrivateRoute />} />
        <Route path="/help" element={<HelpPage />} />
        <Route
          path="/login"
          element={
            <LoginPrivateRoute>
              <LoginPage />
            </LoginPrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPrivateRoute>
              <RegisterPage />
            </RegisterPrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
