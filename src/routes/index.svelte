<script>
	import NumberInput from '$lib/components/NumberInput.svelte';

	import Player from '$lib/components/Player.svelte';
	import { calculatePlayerScore } from '$lib/utilities';

	let name = 'whoever you are';
	let numberOfPlayers = 0;
	let winners = [];
	let winnerInput = 'Who';

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
		document.getElementById('monsterCompendium').style.display = 'none';
		document.getElementById('buttonForCompendium').style.display = 'block';
	};

	const showCompendium = () => {
		document.getElementById('monsterCompendium').style.display = 'block';
		document.getElementById('buttonForCompendium').style.display = 'none';
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
<NumberInput id="players" min={0} max={4} bind:value={numberOfPlayers}
	>Number of players:</NumberInput
>

<p>Click this button when you have finished scoring!</p>
<button on:click={handleClick}> Finished Scoring! </button>
{#if winners.length}
	<p>And the winner is... {winners.map((n) => `Player ${n}`).join(' and ')}!</p>
{/if}

<button on:click={resetGame}>Reset</button>

<button id="buttonForCompendium" on:click={showCompendium}>Show enemy compendium</button>

<!-- For each player, one number input for each category -->
{#each players as player}
	<Player bind:data={player} />
{/each}

<div id="monsterCompendium" style="display:none;">
	<p>
		Below is a compendium of all the monsters in Mage Knight and its expansions. You will find
		descriptions of each monster, its abilities and how to beat it. From terrifying dragons to
		marauding orcs, from malicious ghosts to hordes of zombies, there are tons of monsters in Mage
		Knight to learn how to fight.
	</p>

	<h3>Orcs</h3>
	<p>
		The first monsters that you are likely to fight are orcs. They tend to be relatively easy, and
		they are rampaging enemies, which means that you can attack them from an adjacent square. It
		also means that if you move from one adjacent square to another, they will attack you. This is a
		compendium of all of the orc enemies from the game.
	</p>

	<h4>
		Prowlers: Very weak orc enemies. The best way to defeat these is either to have 3 ranged or
		siege attack, or 4 block, since they do not have much health.
	</h4>

	<h4>
		Cursed Hags: Stronger orc enemies with the poison ability. You will want to block these ones
		because if you don't, they will do extra wounds to your discard pile. Then you need to have 5
		attack of any type.
	</h4>
</div>

<style>
	p {
		color: limegreen;
	}

	.hello {
		color: turquoise;
	}

	button {
		color: black;
	}

	.inputOrder {
		color: burlywood;
	}

	h4 {
		color: limegreen;
		font-size: 1em;
		font-weight: 0.5em;
	}
</style>
