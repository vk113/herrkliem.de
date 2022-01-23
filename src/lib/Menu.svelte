<script>
    import Switch from "$lib/Switch.svelte";
    import {e_in_front} from "$lib/settings";
    import { createEventDispatcher } from "svelte";
    export let running;
    export let speed;
    export let density;
    $: running = running;

    const dispatch = createEventDispatcher();

    function restart(){
        dispatch('restart')
    }

</script>
<div class="flex justify-evenly align-bottom absolute top-0 left-0 w-full bg-gray-200 p-3 items-center z-10">
    <!-- <div class="flex flex-col space-y-2">
        <div class="font-bold text-gray-700">
            Bearbeiten:
        </div>
        <div class="flex flex-row items-center space-x-4 text-gray-700">
            <div  class="font-bold" class:text-red-500={!$e_in_front}>
                B-Feld
            </div>
            <div>
                <Switch/>
            </div>
            <div class="font-bold" class:text-green-500={$e_in_front}>
                E-Feld
            </div>
        </div>
    </div> -->
    <button class="text-green-500 flex flex-row items-center space-x-1" on:click={() => {dispatch("add_e_field")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
        <span>
            E-Feld
        </span>
    </button>
    <button class="text-red-500 flex flex-row items-center space-x-1" on:click={() => {dispatch("add_b_field")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
        <span>
            B-Feld
        </span>
    </button>
    <button class="text-blue-800 flex flex-row items-center space-x-1" on:click={() => {dispatch("add_slit")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
        <span>
            Spalt
        </span>
    </button>
    <button class="text-white flex flex-row items-center space-x-1" on:click={() => {dispatch("add_screen")}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
        <span>
            Schirm
        </span>
    </button>

    
    <div class="flex flex-col items-center space-x-2">
        <div class="text-xs text-gray-700 font-extrabold tracking-tight uppercase">Zeitlupe</div>
        <input type="range" bind:value={speed} min={0.001} max={0.2} step={0.0001}>
        <!-- <div class="w-12 text-gray-800">x{String(speed).replace(".", ",")}</div> -->
    </div>
    <div class="flex flex-col items-center space-x-2">
        <div class="text-xs text-gray-700 font-extrabold tracking-tight uppercase">Teilchendichte</div>
        <input type="range" bind:value={density} min={0} max={50} step={1}>
    </div>
    <div class="flex flex-row space-x-2 items-center">
        <button on:click={()=>{running = !running}} class="hover:scale-105 transition" >
            {#if running}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            {/if}
        </button>
        <button on:click={restart} class="bg-blue-500 h-10 rounded-full w-10 flex flex-row justify-center items-center text-white hover:scale-105 transition" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </button>
    </div>
</div>