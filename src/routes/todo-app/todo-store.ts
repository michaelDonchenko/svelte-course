import { writable } from 'svelte/store';

export interface Todo {
	text: string;
	completed: boolean;
}

export const todoStore = writable<Todo[]>([{ text: 'Learn svelte', completed: true }]);
