import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext({
  user: {
    token: "",
    email: null,
    name: null,
  },
  isLoading: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  // check if user signed in before on first render
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const email = sessionStorage.getItem("email");
    if (token && email) {
      // const payload = { name: name, email: email }
      navigate("/home");
    }
  }, []);

  const login = async (email, password) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch(
      "http://localhost:8080/api/auth/signin",
      requestOptions
    ).then((response) => response.json());
    console.log("response", response);
    return response;
  };

  const userLogin = async (email, password) => {
    setIsLoading(true);

    return await login(email, password)
      .then((res) => {
        const { status, ...user } = res;
        if (status === "success") {
          setUser(user);
          sessionStorage.setItem("token", user.token);
          sessionStorage.setItem("email", user.email);
          return true;
        } else {
          alert("Failed to login, please try again.");
          return false;
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Something went wrong, please try again.");
        return false;
      })
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    sessionStorage.clear();
    setUser({});
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, isLoading, userLogin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return React.useContext(UserContext);
};

export { UserProvider, useUserContext, UserContext };
