import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import { IMenuItem } from "./ui";

export type TParams = {
  id?: string;
};

export type SRoutes = { routes?: IRoute[] };
export interface IRouteComponentProps<T> extends RouteComponentProps<TParams> {
  withProps: T;
}

export interface IRoute extends IMenuItem {
  path?: string;
  exact?: boolean;
  routes?: IRoute[];
  component?: (props?: IRouteComponentProps<any>) => ReactElement;
}
