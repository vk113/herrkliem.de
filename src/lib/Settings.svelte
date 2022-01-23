<script>
    import {E_min, E_max, E_step, B_min, B_max, B_step} from '$lib/settings.js';
    export let simulation;
</script>

<style>
    .h3{
        @apply text-lg font-light;
    }
</style>
<div>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
</div>
<div class="absolute right-0 top-32 bg-gray-200 text-gray-800 px-6 py-2">
    <h1 class="font-bold text-xl">
        Einstellungen
    </h1>
    <h3 class="h3 text-red-500">
        Magnetfelder
    </h3>
    {#each simulation.b_fields as b_field, i}
    <div>
        <span>
            B<sub>{i+1}</sub> = 
        </span>
        <input class="w-18 bg-gray-200" type="number" bind:value={b_field.B}  min={$B_min} max={$B_max} step={$B_step}>
        <span>
            T
        </span>
    </div>
        <input bind:value={b_field.B} type="range" min={$B_min} max={$B_max} step={$B_step}>
        <button class="text-red-500" on:click={() => simulation.b_fields.splice(i, 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
        </button>

    {/each}
    <hr class="border border-gray-700 -mx-4 my-2">
    <h3 class="h3 text-green-500">
        Elektrische Felder
    </h3>
    {#each simulation.e_fields as e_field, i}
        <div>
            <span>
                E<sub>{i+1}</sub> = 
            </span>
            <input class="w-18 bg-gray-200" type="number" bind:value={e_field.E.y}  min={$E_min} max={$E_max} step={$E_step}>
            <span>
                V/m
            </span>
        </div>
        <input bind:value={e_field.E.y} type="range" min={$E_min} max={$E_max} step={$E_step}>
        <button class="text-red-500" on:click={() => simulation.e_fields.splice(i, 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
        </button>

    {/each}

</div>