export type ThemeModel = Readonly<{
	key: string;
	title: string;
}>;

export const LIGHT_THEME: ThemeModel = {
	key: 'light',
	title: 'Light Theme',
};
export const DARK_THEME: ThemeModel = {
	key: 'dark',
	title: 'Dark Theme',
};

export function getTheme(): ThemeModel {
	const theme = localStorage.getItem('theme');

	switch (theme) {
		case 'light':
			return LIGHT_THEME;
		case 'dark':
		default:
			return DARK_THEME;
	}
}

export function setTheme(theme: ThemeModel): void {
	localStorage.setItem('theme', theme.key);
}
export function toggleTheme(): ThemeModel {
	const theme = getTheme().key === LIGHT_THEME.key ? DARK_THEME : LIGHT_THEME;
	setTheme(theme);
	return theme;
}

export function onThemeChange(): void {
	const theme = getTheme();
	const html = document.querySelector('html');

	switch (theme.key) {
		case LIGHT_THEME.key:
			html?.classList.add('light');
			html?.classList.remove('dark');
			html?.style.setProperty('color-scheme', 'light');

			break;
		case DARK_THEME.key:
			html?.classList.remove('light');
			html?.classList.add('dark');
			html?.style.setProperty('color-scheme', 'dark');
			break;
	}
}
