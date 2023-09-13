<script lang="ts">
	import type { Todo } from './todo-store';

	export let index: number;
	export let todo: Todo;
	export let toggleTodo: (index: number) => void;
	export let deleteTodo: (index: number) => void;
</script>

<div>
	<p class="text-2xl font-bold inline-block {todo.completed ? 'line-through' : ''}">
		{index + 1}.
		{todo.text}
	</p>
	<button on:click={() => toggleTodo(index)} class="btn btn-primary ml-4 btn-xs">Toggle</button>
	<button on:click={() => deleteTodo(index)} class="btn btn-neutral ml-4 btn-xs">Delete</button>
</div>
