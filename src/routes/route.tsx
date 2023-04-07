import { createBrowserRouter } from "react-router-dom";
import CrewPage from "../pages/Crew/Crew";
import DestinationPage from "../pages/Destination/Destination";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home.tsx/Home";
import TechnologyPage from "../pages/Technology/Technology";



export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
    ErrorBoundary: ErrorPage
  },
  {
    path: '/destination',
    Component: DestinationPage,
  },
  {
    path: '/crew',
    Component: CrewPage,
  },
  {
    path: '/technology',
    Component: TechnologyPage,
  },
])