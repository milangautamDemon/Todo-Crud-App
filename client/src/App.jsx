import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <HomePage />
    },
    {
      path : "/add",
      element : <AddUser />
    },
    {
      path : "/edit/:id",
      element : <EditUser />
    }
  ])

  return (
    <>
    <div className="app">
        <RouterProvider router={routes} />
    </div>
    </>
  )
}

export default App;
