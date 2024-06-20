export interface Route {
	path: string;
	title: string;
}

export const HOME: Route = {
	path: '/',
	title: 'Home'
};
export const ABOUT: Route = {
	path: '/about',
	title: 'About'
};
export const PROJECT: Route = {
	path: '/project',
	title: 'Project'
};
export const ART: Route = {
	path: '/art',
	title: 'Art'
};
