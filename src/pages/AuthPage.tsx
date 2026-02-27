import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { apiClient } from "../lib/axios";
import "../styles/AuthPage.scss";
import { USER_AUTH_VALUES } from "../constants/formInputs";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { ...USER_AUTH_VALUES },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");
    localStorage.clear();

    try {
      if (isSignUp) {
        if (data.password !== data.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        await apiClient.post("auth/register", {
          username: data.username,
          password: data.password,
        });
        setIsSignUp(false);
        reset();
        toast.success("Registration successful! Please log in.", {
          duration: 3000,
        });
      } else {
        const res = await apiClient.post("auth/login", {
          username: data.username,
          password: data.password,
        });
        if (res.data.token.access_token) {
          const userInfo = JSON.stringify({
            username: res.data.customerName,
            userId: res.data.userId,
          });
          localStorage.setItem("user_info", userInfo);
          localStorage.setItem("auth_token", res.data.token.access_token);
          navigate("/");
        }
      }
    } catch (err: unknown) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data?.message || "Request failed", {
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
            className={errors.username ? "invalid" : ""}
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="error-msg">Username Required</span>
          )}

          <input
            type="password"
            placeholder="Password"
            className={errors.password ? "invalid" : ""}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error-msg">Password Required</span>
          )}

          {isSignUp && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                className={errors.confirmPassword ? "invalid" : ""}
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="error-msg">Confirm Password Required</span>
              )}
            </>
          )}

          <button type="submit" disabled={loading} className="btn-submit">
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              reset();
              setError("");
            }}
            className="btn-toggle">
            {isSignUp ? "Back to Sign In" : "Create Account"}
          </button>
        </div>
      </div>
    </div>
  );
}
