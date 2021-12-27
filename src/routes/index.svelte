<script>
	import Player from '$lib/components/Player.svelte'
	
	let name = 'whoever you are';
	let numberOfPlayers = 0;

	const handleClick = () => {


	}
	
	$: players = Array(numberOfPlayers).fill({
			fame: 0,
			spells: 0,
			actions: 0,
			artifacts: 0,
			crystals: 0,
			healthy: 0,
			wounded: 0,
			fortified: 0,
			adventure: 0,
			wounds: 0,
			cityleader: 0,
			cityfollower: 0
		})
		.map((p, i) => ({
			n: i + 1,
			...p
		}))
	
</script>
<o>
Hello {name}!
</o>


<p>
 My name is Jesper and welcome to my Mage Knight scoring website! 
	This is where you can do all the endgame scoring for competitive Mage Knight without having
	to do all that annoying Maths.
</p>



<style>
	p {
		color: limegreen;
		font-size: 2em;
	}
	
	o {
		color: turquoise;
	}

	label {
		font-size: 2em;

	}
	input {
		height: 2em;
		width: 10em;
		font-size: 1em;
	}

	button {
		height: 2em;
		font-size: 1em;
	}

</style>

<p>
	Type your name below
</p>

<input type='text' bind:value={name}>


<!-- Select number of players -->
<label>Number of players:
	<input type='number' min=0 max=4  bind:value={numberOfPlayers}>
</label>

<p> 
	Click this button when you have finished scoring!
</p>
	<button on:click={handleClick}> Finished Scoring! </button>
<!-- For each player, one number input for each category -->
{#each players as player}
	<Player bind:data={player}>  </Player>	
{/each}
