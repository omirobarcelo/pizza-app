import { writable } from 'svelte/store';

function initStep() {
	const { subscribe, set, update } = writable(1);

	return {
		subscribe,
		nextStep: () => update(n => n >= 3 ? 3 : n + 1),
		prevStep: () => update(n => n <= 1 ? 1 : n - 1),
		goTo: (step) => set(step >= 3 ? 3 : (step <= 1 ? 1 : step))
	};
}

export const step = initStep();