import { siteConfig } from "../config/site.config";

import Home from "../pages/Home";
import Solucoes from "../pages/Solucoes";
import Contato from "../pages/Contato";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/solucoes",
    element: <Solucoes />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
];