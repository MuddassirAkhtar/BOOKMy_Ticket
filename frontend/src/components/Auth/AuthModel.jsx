import React, { useEffect, useState } from "react";
import styles from "./authmodel.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeAuthModel } from "../../store/reducer/authSlice";
import { asyncAddUsers } from "../../store/actions/authAction";
import { asyncLoginUser } from "../../store/actions/authAction";
const AuthModel = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll when modal is open
    return () => {
      document.body.style.overflow = "auto"; // re-enable scroll when closed
    };
  }, []);

  const closePopeupHandler = () => {
    dispatch(closeAuthModel());
  };

  const loginHandler = (user) => {
//     console.log("Logging in:", user);
dispatch(asyncLoginUser(user))
dispatch(closeAuthModel());

    reset();
  };

  const registerHandler = (user) => {
//     console.log("Registering:", user);
        dispatch(asyncAddUsers(user))
        dispatch(closeAuthModel());

        


    reset();
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    reset();
  };

  return (
    <div className={styles.container}>
      {isLogin ? (
        <div className={styles.login}>
          <div className={styles.close}>
            <IoCloseSharp onClick={closePopeupHandler} />
          </div>
          <h1 className={styles.heading}>Welcome Back</h1>
          <form className={styles.form} onSubmit={handleSubmit(loginHandler)}>
            <input {...register("email")} type="email" placeholder="@Email" />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
            <p>
              Don't have an account?{" "}
              <span className={styles.register} onClick={toggleForm}>
                Register
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className={styles.login}>
          <div className={styles.close}>
            <IoCloseSharp onClick={closePopeupHandler} />
          </div>
          <h1 className={styles.heading}>Create Account</h1>
          <form className={styles.form} onSubmit={handleSubmit(registerHandler)}>
            <input {...register("name")} type="text" placeholder="Full Name" />
            <input {...register("email")} type="email" placeholder="@Email" />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            <input
              {...register("location")}
              type="text"
              placeholder="location"
            />
            <button type="submit">Register</button>
            <p>
              Already have an account?{" "}
              <span className={styles.register} onClick={toggleForm}>
                Login
              </span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthModel;
