<script lang="ts">
	import TodoItem from './TodoItem.svelte';
	import { todoStore } from './todo-store';
	import { onMount } from 'svelte';

	let newTodo = '';

	function addTodo() {
		todoStore.update((prev) => [{ text: newTodo, completed: false }, ...prev]);
		newTodo = '';
		addToLocalStorage();
	}

	function deleteTodo(index: number) {
		todoStore.update((prev) => {
			prev.splice(index, 1);
			return prev;
		});
		addToLocalStorage();
	}

	function toggleTodo(index: number) {
		todoStore.update((prev) => {
			const todoToModify = prev[index];
			prev[index] = { ...todoToModify, completed: !todoToModify.completed };
			return prev;
		});
		addToLocalStorage();
	}

	onMount(() => {
		const todosFromLocalStorage = localStorage.getItem('todos');
		if (typeof todosFromLocalStorage === 'string') {
			const parsedTodos = JSON.parse(todosFromLocalStorage);
			todoStore.set(parsedTodos);
		}
	});

	function addToLocalStorage() {
		localStorage.setItem('todos', JSON.stringify($todoStore));
	}
</script>

<div class="container mx-auto my-8">
	<h1 class="text-3xl font-bold text-center mb-8">Todo app</h1>

	<form class="mb-8" on:submit={addTodo}>
		<input type="text" placeholder="New todo" class="input input-bordered" bind:value={newTodo} />
		<button class="btn btn-primary">Add todo</button>
	</form>

	{#each $todoStore as todo, index}
		<TodoItem {index} {todo} {deleteTodo} {toggleTodo} />
	{/each}
</div>
