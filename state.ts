export type AppState = typeof initial;

export const enum OutputType {hidden, text, error}

export const initial = {
	initialized: false,
	platform: null as Office.PlatformType,
	output: {
		type: OutputType.hidden as OutputType,
		text: '',
		error: null as Error,
	},
	progress: {show: false, aborting: false, percent: 0.0},
};