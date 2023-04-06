import { signIn, signOut, useSession } from "next-auth/client";
function App() {
  const [session] = useSession();

  const handleLogin = () => {
    signIn("google");
  };

  const handleLogout = () => {
    signOut();
  };
return (
    <div>
      {session ? (
        <div>
          <button onClick={handleLogout}>Sign out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}
export default App;






