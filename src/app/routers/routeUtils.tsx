import { routes } from "./routes";
import { IRoute } from "./AppRouter";

export const findRouteById = (targetId: string): IRoute =>
  routes.find(({ id }) => id === targetId);

export const getSubRoutesByRootId = (rootId: string): IRoute[] =>
  routes.filter(({ id, parentId }) => id !== rootId && parentId === rootId);

export const parseRelativeRoutes = ({
  routes,
  currentPath,
}: {
  routes: IRoute[];
  currentPath: string;
}): IRoute[] => {
  const splitUrl = currentPath.split("/").filter((s: string) => Boolean(s));
  const [root, child, grandChild] = splitUrl;
  return routes.map((route) => {
    const { path } = route;

    return {
      ...route,
      path: getRelativePath({ currentPath, path }),
    };
  });
};

export const getRelativePath = ({
  currentPath,
  path,
}: {
  currentPath: string;
  path: string;
}): string => {
  const splitUrl = currentPath.split("/").filter((s: string) => Boolean(s));
  const [root, child, grandChild] = splitUrl;
  const defaultPath = child ? path.substr(1).replace(root, ".") : path;
  const relativePath = grandChild
    ? path.substr(1).replace(`${root}/child`, "..")
    : defaultPath;
  return relativePath;
};
