import { CircularProgress, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authActions";
import { resetLogin } from "../../features/auth/authSlice";

function LoginPage() {
  const { loading, loginError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(resetLogin());
  }, [dispatch]);

  const handleLogin = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1 className="m-5">Login</h1>
        <div className="m-3">
          <TextField
            label="Email"
            className="w-50"
            {...register("email")}
            required
          />
        </div>
        <div className="m-3">
          <TextField
            type="password"
            label="Password"
            className="w-50"
            {...register("password")}
            required
          />
        </div>
        <div className="form-group m-3">
          <span className="text-danger">{loginError}</span>
        </div>
        <button type="submit" className="btn btn-dark w-25" disabled={loading}>
          {loading ? <CircularProgress color="inherit" size={20} /> : "Log in"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
