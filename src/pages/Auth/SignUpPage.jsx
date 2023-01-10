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
import { useNavigate } from "react-router-dom";
import routes from "../../router";

const schema = object({
  email: string().email(),
  name: string(),
  password: string().min(1, "Password is required"),
}); // zod schema

const SignUpPage = () => {
  const { userSignUp, isLoading } = useUserContext();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, register, formState } = methods;

  const onSubmitHandler = async (values) => {
    const success = await userSignUp(values.email, values.password);
    if (success) navigate("/home");
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.login} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={styles.panel}>
          <div>
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              autoComplete="off"
            >
              <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="sign-up-input"
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
                label="Name"
                variant="standard"
                type="text"
                {...register("name")}
                defaultValue="HL"
              />
            </Box>
            <p className={styles.error}>
              {formState.errors.name ? formState.errors.name.message : ""}
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
                defaultValue="1234"
              />
            </Box>
            <p className={styles.error}>
              {formState.errors.password
                ? formState.errors.password.message
                : ""}
            </p>
          </div>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ alignSelf: "end" }}
          >
            {isLoading ? (
              <CircularProgress color="alternate" size="2rem" />
            ) : (
              "Sign Up"
            )}
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{ alignSelf: "end" }}
            onClick={() => navigate(routes.login)}
          >
            {"Login"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpPage;
