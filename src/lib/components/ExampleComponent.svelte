<script lang="ts">
	export let title: string = '';
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{title || 'Cookies!'}</h2>
		<slot />
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Accept</button>
			<button class="btn btn-ghost">Deny</button>
		</div>
	</div>
</div>
