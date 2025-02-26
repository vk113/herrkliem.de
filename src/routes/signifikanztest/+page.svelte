<script>
    export let data
    let x = data.x
    let p = 0.2;
	let n = 100;
    let hits = 0;
    let show_results = false;

    function simulate(n){
        let hits = 0;
        
        for(let i=0; i<n; i++){
            if (Math.random()<p){
                hits += 1
            }
        }
        console.log(hits)
        return hits
    }
</script>

{@html `<!-- Ihr braucht hier garnicht nach der Lösung zu suchen, Jakob und Johannes Valentin! -->`}
<div class="flex items-center justify-center h-screen flex-col space-y-4">
    <h1 class="w-full text-center mt-12 mb-12 text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Gewinne mit einer Chance von mindestens 25%!!!</h1>
	<div class="text-xl">Du hast...
	<div class="text-6xl mb-5">
		{#if x > p}
			<div class="text-red-500">verloren!</div>
		{:else}
			<div class="win text-green-500">gewonnen!</div>
		{/if}
	</div>
    </div>
	<button
		class="p-2 rounded-md bg-gray-200 hover:bg-gray-800 hover:text-white "
		on:click={() => location.reload()}>Nochmal!</button
	>
	<div class="inline">
		Simuliere <input
			class="inline-block w-24 border-b-2 border-black"
			type="number"
            on:input={() => show_results = false}
			bind:value={n}
		/>
		Durchgänge!
		<button class="p-2 ml-2 rounded-md bg-green-200 hover:bg-green-800 hover:text-white" on:click={() => {hits = simulate(n), show_results = true}}
			>Los!</button
		>
	</div>
    {#if show_results}
    <table>
        <tr class="text-green-500"> 
            <th>Anzahl Treffer:</th> <td>{hits}</td>
        </tr>
        <tr>
            <th>Anzahl k. Treffer:</th> <td>{n-hits}</td>

        </tr>
    </table>
    {/if}
</div>

<style>
	.win {
		animation: pulse 0.5s infinite;
	}

    th {
        text-align: right;
    }
</style>
