<script>
	import { getContext } from 'svelte';

	// Access the context
	const appContext = getContext('appContext');
</script>

<div>
	<p>Current Theme: {$appContext.theme}</p>
	<button class="btn btn-primary" on:click={$appContext.toggleTheme}>Toggle Theme</button>
</div>
