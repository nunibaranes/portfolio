import React from "react";
import { IRoute } from "../../routers/AppRouter";
import { routes, GUESS_WHO_I_AM } from "../../routers/routes";

export default function GuessWhoIAm() {
  const rootRoute: IRoute = routes.find(({ id }) => id === GUESS_WHO_I_AM);

  return (
    <div>
      <h2>{rootRoute.title}</h2>
    </div>
  );
}
