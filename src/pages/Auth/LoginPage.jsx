import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button, CircularProgress } from "@mui/material";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./Login.module.scss";
import { useUserContext } from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../router";
import Tiles from "./Tiles";

const schema = object({
  email: string().email(),
  password: string().min(1, "Password is required"),
}); // zod schema

const Login = () => {
  const { userLogin, isLoading } = useUserContext();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, register, formState } = methods;

  const onSubmitHandler = async (values) => {
    const success = await userLogin(values.email, values.password);
    if (success) navigate("/home");
  };

  return (
    <FormProvider {...methods}>
      <Tiles></Tiles>

      <form className={styles.login} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={styles.panel}>
          <span className={styles.fancy}>Care4U</span>
          <div>
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              autoComplete="off"
            >
              <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="login-input"
                label="Email Address"
                variant="standard"
                type="email"
                {...register("email")}
                autoComplete="off"
                defaultValue="hl2@gmail.com"
              />
            </Box>
            <p className={styles.error}>
              {formState.errors.email ? formState.errors.email.message : ""}
            </p>
          </div>
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Password"
                variant="standard"
                type="password"
                {...register("password")}
                // defaultValue="1234"
              />
            </Box>
            <p className={styles.error}>
              {formState.errors.password
                ? formState.errors.password.message
                : ""}
            </p>
          </div>

          <Button type="submit" color="primary" variant="contained">
            {isLoading ? (
              <CircularProgress color="alternate" size="2rem" />
            ) : (
              "Login"
            )}
          </Button>
          <Link to={routes.signUp}>{"Sign Up"}</Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;
