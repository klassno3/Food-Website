import Home  from "./pages/Home"
import Login from "./pages/Login"
import Navigation from "./component/Navigation.jsx"
import Footer from "./component/Footer"
import Lunch from "./pages/Lunch"
import Breakfast from "./pages/BreakFast"
import Snack from "./pages/Snack"
import Dinner from "./pages/Dinner"
import SignIn from "./pages/SignIn"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Share from "./pages/Share"



function App () {
  

  const Layout = () => {
    return (
      <div className="">

        <Navigation />
        
        <Outlet/>
     <Footer/>
      </div>
    );
  }
  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
       
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/login",
          element:<Login/>,
        },
        {
          path: "sign in",
          element:<SignIn/>,
        },
        {
          path: "/share",
          element:<Share/>,
        },
       
        {
          path: "/lunch",
          element:<Lunch/>
        },

        {
          path: "/breakfast",
          element:<Breakfast/>
        },
        {
          path: "/dinner",
          element:<Dinner/>
        },
        {
          path: "/snack",
          element:<Snack/>
        },

      ]
    
  },
]);
  return (
     
    <div className="" >
       <RouterProvider router={router} />
      
      </div> 
  );
}

export default App;

