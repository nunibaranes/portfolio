import React from "react";

import { RouteMenu, IRoute } from "../../routers/AppRouter";
import { routes } from "../../routers/routes";

export default function Portfolio() {
  const portfolio: IRoute = routes.find(({ id }) => id === "portfolio");
  return (
    <div>
      <h2>{portfolio.title}</h2>
      <RouteMenu routes={portfolio.routes} />
    </div>
  );
}
