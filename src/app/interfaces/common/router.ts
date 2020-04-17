import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";

export type TParams = {
  id?: string;
};

export type SRoutes = { routes?: IRoute[] };
export interface IRouteComponentProps<T> extends RouteComponentProps<TParams> {
  withProps: T;
}

export interface IRoute {
  id: string;
  path?: string;
  exact?: boolean;
  component: (props?: IRouteComponentProps<any>) => ReactElement;
  routes?: IRoute[];
  title?: string;
  parentId?: string;
}
