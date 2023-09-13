<script lang="ts">
	import { onDestroy } from 'svelte';

	let count = 0;
	let isRunning = true;
	let interval = setInterval(() => count++, 1000);
	$: derivedCount = count * 2;

	onDestroy(() => clearInterval(interval));

	const handleStop = () => {
		clearInterval(interval);
		isRunning = false;
	};
	const handleReset = () => {
		count = 0;
	};
	const handleContinue = () => {
		clearInterval(interval);
		interval = setInterval(() => count++, 1000);
		isRunning = true;
	};

	console.log({ count });
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body p-4">
		<p>The count is {count}</p>
		<p>The derived count is {derivedCount}</p>

		<div>
			<button on:click={isRunning ? handleStop : handleContinue} class="btn btn-primary">
				{isRunning ? 'Stop' : 'Continue'}
			</button>
			<button on:click={handleReset} class="btn btn-neutral">Reset</button>
		</div>
	</div>
</div>
