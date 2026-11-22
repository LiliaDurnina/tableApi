import { UserProvider } from "../context/UsersProvider";
import { Layout } from "../pages/Layout";
function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}

export default App;
