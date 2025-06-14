import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Signin from "../Pages/Signin/Signin";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageEvents from "../Pages/ManageEvents/ManageEvents";
import CreateEvents from "../Pages/CreateEvents/CreateEvents";
import UpcommingEvents from "../Pages/UpcomngEvets/UpcomingEvents";
import axios from "axios";
import EventDetails from "../Pages/EventDetails/EventDetails";
import MyJoinedEvents from "../Pages/MyJoinedEvents/MyJoinedEvents";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () =>
          axios.get("http://localhost:3000/events").then((res) => res.data),
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoute>
            <ManageEvents />
          </PrivateRoute>
        ),
        loader: () =>
          axios.get("http://localhost:3000/events").then((res) => res.data),
      },
      // {
      //   path: "/joined-events",
      //   element: (
      //     <PrivateRoute>
      //       <JoinedEvents />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/upcoming-events",
        element: (
          <>
            <UpcommingEvents />
          </>
        ),
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
      },
      {
        path: "/my-joined-events",
        element: (
          <PrivateRoute>
            <MyJoinedEvents />
          </PrivateRoute>
        ),
      },
      ///
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
