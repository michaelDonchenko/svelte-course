<script lang="ts">
	import { countStore } from './stores';

	const reset = () => {
		countStore.set(0);
	};
</script>

<button class="btn btn-neutral" on:click={reset}>Reset</button>
