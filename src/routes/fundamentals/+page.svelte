<script lang="ts">
	import MyComponent from '$lib/components/ExampleComponent.svelte';
	import Timer from '$lib/components/Timer.svelte';
</script>

<div class="container mx-auto my-8">
	<h1 class="text-center text-3xl font-bold mb-8">Fundamentals</h1>

	<div class="flex gap-8 mb-8">
		<MyComponent title="Title from props">
			<p>children</p>
		</MyComponent>
		<Timer />
	</div>
</div>
