<script> 
    export let data;
        
    $: score = data.fame + data.spells * 2 + data.actions + data.artifacts * 2 + Math.floor(data.crystals / 2) + data.healthy + Math.floor(data.wounded / 2) + data.fortified * 2 + data.adventure * 2 - data.wounds * 2 + data.cityleader * 7 + data.cityfollower * 4;
    </script>
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
        <label>Number of Cities Led :
            <input type='number' min=0 bind:value={data.cityleader}>
        </label>
        <label>Number of Cities Followed :
            <input type='number' min=0 bind:value={data.cityfollower}>
        </label>
        <p>
            Score: {score}
        </p>
    </div>
    