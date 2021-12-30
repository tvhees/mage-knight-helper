<script>
	import Player from '$lib/components/Player.svelte';
	import { calculatePlayerScore } from '$lib/utilities';

	let name = 'whoever you are';
	let numberOfPlayers = 0;
	let winners = [];

	const handleClick = () => {
		let playersWhoWon = [];
		let scores = players.map((player) => calculatePlayerScore(player));
		players.forEach((player) => {
			let score = calculatePlayerScore(player);
			if (score >= Math.max(...scores)) {
				playersWhoWon.push(player.n);
			}
		});
		winners = playersWhoWon;
	};

	const resetGame = () => {
		numberOfPlayers = 0;
		winners = [];
	};

	$: players = Array(numberOfPlayers)
		.fill({
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
		}));
</script>

<p class="hello">
	Hello {name}!
</p>

<p>
	My name is Jesper and welcome to my Mage Knight website! This is where you can do all the endgame
	scoring for competitive Mage Knight without having to do all that annoying Maths. There is also a
	compendium of most of the monsters in the game and the best way to defeat them
</p>

<p class="inputOrder">Type your name below</p>

<input type="text" bind:value={name} />

<!-- Select number of players -->
<label
	>Number of players:
	<input type="number" min="0" max="4" bind:value={numberOfPlayers} />
</label>

<p>Click this button when you have finished scoring!</p>
<button on:click={handleClick}> Finished Scoring! </button>
{#if winners.length}
	<p>And the winner is... {winners.map((n) => `player ${n}`).join(' and ')}</p>
{/if}

<button on:click={resetGame}>Reset</button>

<!-- For each player, one number input for each category -->
{#each players as player}
	<Player bind:data={player} />
{/each}

<p>
	Below is a compendium of all the monsters in Mage Knight and its expansions. You will find
	descriptions of each monster, its abilities and how to beat it. From terrifying dragons to
	marauding orcs, from malicious ghosts to hordes of zombies, there are tons of monsters in Mage
	Knight to learn how to fight.
</p>

<p>
	Orcs The first monsters that you are likely to fight are orcs. They tend to be relatively easy,
	and they are rampaging enemies, which means that
</p>

<style>
	p {
		color: limegreen;
		font-size: 2em;
		font-family: 'Spline Sans', sans-serif;
	}

	.hello {
		color: turquoise;
		font-size: 2em;
		font-family: 'Spline Sans', sans-serif;
	}

	label {
		font-size: 2em;
		font-family: 'Spline Sans', sans-serif;
		color: aquamarine;
	}
	input {
		height: 2em;
		font-size: 1em;
	}

	button {
		height: 2em;
		font-size: 1em;
		font-family: 'Spline Sans', sans-serif;
		color: black;
	}

	.inputOrder {
		color: burlywood;
	}
</style>
