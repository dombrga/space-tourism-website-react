import { createBrowserRouter } from "react-router-dom";
import CrewPage from "../pages/Crew/Crew";
import DestinationPage from "../pages/Destination/Destination";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/Home";
import TechnologyPage from "../pages/Technology/Technology";
import RootPage from "./Root/RootPage";

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootPage,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/home',
        Component: HomePage,
        id: 'home'
      },
      {
        path: '/destination',
        Component: DestinationPage,
        id: 'destination'
      },
      {
        path: '/crew',
        Component: CrewPage,
        id: 'crew'
      },
      {
        path: '/technology',
        Component: TechnologyPage,
        id: 'technology'
      },
    ]
  },
])

export default router