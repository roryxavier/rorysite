export interface Theme {
	key: string;
	title: string;
}

export const LightTheme: Theme = {
	key: 'light',
	title: 'Light Theme'
};
export const DarkTheme: Theme = {
	key: 'dark',
	title: 'Dark Theme'
};

export function getTheme(): Theme {
	const theme = localStorage.getItem('theme');

	switch (theme) {
		case 'light':
			return LightTheme;
		case 'dark':
		default:
			return DarkTheme;
	}
}

export function setTheme(theme: Theme): void {
	localStorage.setItem('theme', theme.key);
}
export function toggleTheme(): Theme {
	const theme = getTheme().key === LightTheme.key ? DarkTheme : LightTheme;
	setTheme(theme);
	return theme;
}

export function onThemeChange(): void {
	const theme = getTheme();
	const html = document.querySelector('html');
	const isDark = html?.classList.contains('dark');

	switch (theme.key) {
		case LightTheme.key:
			if (isDark) {
				html?.classList.remove('dark');
				html?.style.setProperty('color-scheme', 'light');
			}
			break;
		case DarkTheme.key:
			if (!isDark) {
				html?.classList.add('dark');
				html?.style.setProperty('color-scheme', 'dark');
			}
			break;
	}
}
