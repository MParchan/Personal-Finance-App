import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPrivateRoute from "./privateRoutes/LoginPrivateRoute";
import RegisterPrivateRoute from "./privateRoutes/RegisterPrivateRoute";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
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
