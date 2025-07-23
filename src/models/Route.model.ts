export type RouteModel = Readonly<{
  path: string;
  title: string;

  isDisabled: boolean;
}>;

export const HOME_ROUTE: RouteModel = {
  path: '/',
  title: 'Home',

  isDisabled: false,
};
export const ABOUT_ROUTE: RouteModel = {
  path: '/about',
  title: 'About',

  isDisabled: true,
};
export const PROJECT_ROUTE: RouteModel = {
  path: '/project',
  title: 'Project',

  isDisabled: true,
};
export const ART_ROUTE: RouteModel = {
  path: '/art',
  title: 'Art',

  isDisabled: true,
};
