import { useAuth } from "../context/AuthContext";

export function Logout() {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return <button onClick={handleLogout}>Logout</button>;
}
