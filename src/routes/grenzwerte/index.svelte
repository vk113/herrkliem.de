<script>
	import * as THREE from 'three';
    import EarthView from '$lib/EarthView.svelte'
    import TotalView from '$lib/TotalView.svelte';
    import Plot from '$lib/Plot.svelte'
    import katex from 'katex';

    let step = 0;

    let mounted = false;
    const RADIUS = 6371;
    var material = new THREE.MeshBasicMaterial();
    let imagemode = false;
    let r = 1;
    let h = 0.2;
    let fov = 100;
    let canvas;
    let intervall_size = 0.1;
    let x_max = 20000;
    let lim = .5;
    $: console.log("imagemode", imagemode)
    $: if(imagemode){
        fov = 120 * r/(r+h);
    } else {
        fov = 100;
    }


    const data = {
        datasets: [{
            
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
        };
</script>
<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous">
  </svelte:head>

    <div class="grid grid-cols-10">
        <div class="col-span-8 border-l-2 border border-white w-full">
            <div class="container">
                <div class="absolute z-50 bg-black m-2 text-white text-xl">
                    Blick auf die Erde
                </div>
                <EarthView bind:h fov={fov} {r}/>
            </div>
        </div>
        <div class="col-span-2">
            <div class="container">
                <div class="absolute z-50 bg-black m-2 text-white text-xl">
                    Position der Raumstation
                </div>


                <TotalView bind:h {r}/>
            </div>
        </div>
        <div class="col-span-3 p-3 pr-0 h-[40vh]">
            <div class="card flex flex-col justify-evenly">

                <div class="flex flex-col space-y-2 ">
                    <label for="h">
                        <span class="text-lg font-bold">
                            Höhe:
                        </span>
                        x = {Math.round(h*RADIUS)} km</label>
                        <input id="h" type="range" min={0.1} max={20} step={0.01} bind:value={h}>
                </div>
                

                <div>
                    <input id="imagemode" type="checkbox" bind:checked={imagemode}>
                    <label for="imagemode">Größe fixieren</label>
                </div>
                {#if step >= 1}
                    
                    {#if step >= 3}

                    <div class="flex flex-col space-y-2">
                        <label for="lim">
                            <span class="text-lg font-bold text-green-800">
                                Asymptote
                            </span>
                            y =
                            <input type="number" step={0.01} bind:value={lim} class="w-24 border border-gray-400 rounded-md p-1">
                        </label>
                            <input id="lim" type="range" min={0} max={1} step={0.01} bind:value={lim}>
                    </div>
                    {/if}
                    {#if step >= 4}

                    <div class="flex flex-col space-y-2">
                        <label for="intervall" class="text-black-700">
                            <span class="text-lg font-bold text-red-500">
                                Abstand zum Grenzwert:
                            </span>
                            <input type="number" step={0.01} bind:value={intervall_size} class="w-24 border border-gray-400 rounded-md p-1">
                        </label>
                            <input id="intervall" type="range" min={0.001} max={0.2} step={0.001} bind:value={intervall_size}>
                    </div>
                    {/if}
                {/if}
                <div class="flex flex-row justify-between">
                    <button on:click={() => {step = Math.max(0, step-1)}} class=" hover:scale-105 transform duration-200 border border-gray-200 shadow-md rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                    </button>
                    <button on:click={() => step++} class=" hover:scale-105 transform duration-200 border border-gray-200 shadow-md rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                    </button>
                </div>
               
            </div>
        </div>
        {#if step >= 1}
        <div class="col-span-7 p-3 h-[40vh]" >
            <div class="card">
                <Plot {h} {x_max} {intervall_size} {lim} {step}/>
            </div>
        </div>
        {/if}
    </div>

        
<style lang="postcss">
    .container{
        position: relative;
        height: 60vh;        
    }
    
    .card{
        @apply p-3 shadow-lg rounded-lg border border-gray-300 h-full overflow-hidden;
    }
</style>