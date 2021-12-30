<script lang="ts">
	export let min: number = -Infinity;
	export let max: number = Infinity;
	export let value: number;
	export let id: string;
</script>

<label for={id}>
	<slot />
</label>
<button on:click={() => (value = Math.max(value - 1, min))}>&#8249;</button>
<input {id} type="number" {min} {max} bind:value on:input />
<button on:click={() => (value = Math.min(value + 1, max))}>&#8250;</button>

<style>
	* {
		font-family: inherit;
		font-size: inherit;
		font-style: inherit;
		font-weight: inherit;
		line-height: inherit;
		color: inherit;
	}

	label {
		margin-right: 0.2rem;
	}

	button {
		background-color: transparent;
		border-width: 0;
		padding: 0.1rem;
	}

	button:hover,
	button:focus {
		outline: 1px solid orangered;
	}

	input {
		-moz-appearance: textfield;
		border: none;
		width: 3ch;
		text-align: center;
	}

	input::-webkit-inner-spin-button,
	input::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
