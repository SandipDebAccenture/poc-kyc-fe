import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  login: (token: string): void => {
    console.log(token); // TODO: Remove
  },
  logout: (): void => {},
});

export const AuthProvider = ({ children }: { children: React.JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth_token"),
  );

  const login = (token: string) => {
    localStorage.setItem("auth_token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
