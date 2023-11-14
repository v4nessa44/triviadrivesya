import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { UserContextProvider } from "./contextApi/UserContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
  return (
    <UserContextProvider>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Header />
        <Outlet />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserContextProvider>
  );
}

export default App;