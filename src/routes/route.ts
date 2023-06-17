import { CrewPage, DestinationPage, ErrorPage, HomePage, TechnologyPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Root/RootPage";


const router = createBrowserRouter(
  [
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
  ],
  {
    // basename: import.meta.env.MODE === 'production' ? import.meta.env.VITE_BASE_URL : undefined
    // basename: '/space-tourism-website-react/'
    // basename: 'https://dombrga.github.io/space-tourism-website-react/'
  }
)

export default router