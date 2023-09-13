<script lang="ts">
	interface Response {
		message: string;
	}

	const isAuth = false;
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

	let promise = new Promise<Response>((res, rej) => {
		setTimeout(() => res({ message: 'success' }), 3000);
	});
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-3xl font-bold mb-8">Logic and Rendering</h1>

	<div class="mb-8">
		<h1 class="text-2xl font-bold">If statement</h1>
		{#if isAuth}
			<p>you are authenticated</p>
		{:else}
			<p>you are not authenticated</p>
		{/if}
	</div>

	<div class="mb-8">
		<h1 class="text-2xl font-bold">loops</h1>
		{#each colors as color, index}
			<p style="background-color: {color}">{index}: {color}</p>
		{/each}
	</div>

	<div>
		<h1 class="text-2xl font-bold">Promises</h1>
		{#await promise}
			<p>loading...</p>
		{:then response}
			<p>{response.message}</p>
		{:catch error}
			<p style="color: red">{error}</p>
		{/await}
	</div>
</div>
