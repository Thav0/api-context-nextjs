import { createContext, ReactNode, useContext, useState } from "react";

// Step 1 - create a type for the context
type authContextType = {
  user: boolean | null;
  login: () => void;
  logout: () => void;
};

// Step 2 - create structure for default values
const authContextDefaultValues: authContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

// Step 3 - apply the interfaces and default values
const AuthContext = createContext<authContextType>(authContextDefaultValues);

// Step 4 - Export hook useAuth
export function useAuth() {
  return useContext(AuthContext);
}

// Apply props to render children components
type Props = {
  children: ReactNode;
};

// Step 5 - Export the provider to be used on the _app.tsx
export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean | null>(null);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
