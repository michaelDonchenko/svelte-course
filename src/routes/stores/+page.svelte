<script>
	import NestedComponent from './NestedComponent.svelte';
	import { countStore } from './stores';
	import { setContext } from 'svelte';
	import ChildComponent from './ChildComponent.svelte';
	import { writable } from 'svelte/store';

	function increment() {
		countStore.update((n) => n + 1);
	}

	function decrement() {
		countStore.update((n) => n - 1);
	}

	const appContext = writable({
		theme: 'light',
		toggleTheme: () => {
			$appContext.theme = $appContext.theme === 'light' ? 'dark' : 'light';
		}
	});

	setContext('appContext', appContext);
</script>

<div class="container mx-auto my-8">
	<h1 class="text-3xl font-bold text-center mb-8">Store</h1>

	<p>Count: {$countStore}</p>

	<button class="btn btn-primary" on:click={increment}>Increment</button>
	<button class="btn btn-primary" on:click={decrement}>Decrement</button>
	<NestedComponent />

	<h1 class="text-3xl font-bold text-center mb-8">Context</h1>
	<ChildComponent />
</div>
