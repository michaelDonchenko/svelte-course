<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
</script>

<Nav />
<main class="px-8">
	<slot />
</main>
