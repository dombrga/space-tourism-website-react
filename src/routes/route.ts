import { CrewPage, DestinationPage, ErrorPage, HomePage, TechnologyPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
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