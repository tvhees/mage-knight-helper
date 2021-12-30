<script>
import { calculatePlayerScore } from "$lib/utilities";

 
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
        
        <label>Fame:
            <input type='number' min=0 bind:value={data.fame}>
        </label>
        <!-- Spells/Actions --> 
        <label>Number of Spells:
            <input type='number' min=0 bind:value={data.spells}>
        </label>
        <label>Number of Advanced Actions:
            <input type='number' min=0 bind:value={data.actions}>
        </label>
    <!-- Artifacts/Crytals -->
        <label>Number of Artifacts:
            <input type='number' min=0 bind:value={data.artifacts}>
        </label>
        <label>Number of Crystals:
            <input type='number' min=0 bind:value={data.crystals}>
        </label>
    <!-- Units/Wounded Units -->
        <label>Total levels of Healthy Units:
            <input type='number' min=0 bind:value={data.healthy}>
        </label>
        <label>Total levels of Wounded Units:
            <input type='number' min=0 bind:value={data.wounded}>
        </label>
    <!-- Monasteries/Keeps/Mage Towers -->
        <label>Number of Conquered Fortified Sites:
            <input type='number' min=0 bind:value={data.fortified}>
        </label>
    <!-- Adventure sites -->
        <label>Number of Conquered Adventure Sites:
            <input type='number' min=0 bind:value={data.adventure}>
        </label>
    <!-- Wounds -->
        <label>Number of Wounds:
            <input type='number' min=0 bind:value={data.wounds}>
        </label>
    <!-- Cities Led/Followed -->

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
