import { useAuth } from "../context/AuthContext";

export function Login() {
  const { user, login } = useAuth();

  function handleLogin() {
    login();
  }

  return <button onClick={handleLogin}>Login</button>;
}
