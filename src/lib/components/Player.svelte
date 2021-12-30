<script>
	import { calculatePlayerScore } from '$lib/utilities';
	import NumberInput from './NumberInput.svelte';

	export let data;

	$: score = calculatePlayerScore(data);
</script>

<!-- <svelte:head>
        <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet">
    </svelte:head> -->

<div>
	<h2>
		Player {data.n}
	</h2>

	<!-- Fame -->
	<span>
		<NumberInput id="fame" min={0} bind:value={data.fame}>Fame:</NumberInput>
	</span>
	<!-- Spells/Actions -->
	<span>
		<NumberInput id="spells" min={0} bind:value={data.spells}>Advanced Actions:</NumberInput>
	</span>
	<span>
		<NumberInput id="actions" min={0} bind:value={data.actions}>Spells:</NumberInput>
	</span>
	<!-- Artifacts/Crytals -->
	<span>
		<NumberInput id="artifacts" min={0} bind:value={data.artifacts}>Artifacts:</NumberInput>
	</span>
	<span>
		<NumberInput id="crystals" min={0} bind:value={data.crystals}>Crystals:</NumberInput>
	</span>
	<!-- Units/Wounded Units -->
	<span>
		<NumberInput id="healthy" min={0} bind:value={data.healthy}>Levels of Healthy Units</NumberInput
		>
	</span>
	<span>
		<NumberInput id="wounded" min={0} bind:value={data.wounded}
			>Levels of Wounded Units:</NumberInput
		>
	</span>
	<!-- Monasteries/Keeps/Mage Towers -->
	<span>
		<NumberInput id="fortified" min={0} bind:value={data.fortified}>Occupied Sites:</NumberInput>
	</span>
	<!-- Adventure sites -->
	<span>
		<NumberInput id="adventure" min={0} bind:value={data.adventure}>Adventure Sites:</NumberInput>
	</span>
	<!-- Wounds -->
	<span>
		<NumberInput id="wounds" min={0} bind:value={data.wounds}>Wounds:</NumberInput>
	</span>
	<!-- Cities Led/Followed -->
	<span>
		<NumberInput id="city-lead" min={0} bind:value={data.cityleader}>Cities Led:</NumberInput>
	</span>
	<span>
		<NumberInput id="city-follow" min={0} bind:value={data.cityfollower}
			>Cities Followed:</NumberInput
		>
	</span>
	<p>
		Score: {score}
	</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
