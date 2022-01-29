<script>
    import {B_max, B_min, B_step} from '$lib/settings.js';
    import Movable from '$lib/Movable.svelte';
    import SettingsBlock from '$lib/SettingsBlock.svelte';
    import SettingsItem from '$lib/SettingsItem.svelte';
    export let b_field;
    export let i;
    let max_density = 50;
    $: direction_down = b_field.B > 0; 
    $: n_of_circles = Math.max(2, Math.floor(b_field.w/max_density*Math.min(Math.abs(b_field.B), $B_max)/$B_max));
    $: n_of_rows = Math.max(2,Math.floor(b_field.h/max_density*Math.min(Math.abs(b_field.B), $B_max)/$B_max));
    $: rows = Array(n_of_rows)
    $: circles = Array(n_of_circles)
    
</script>


<Movable bind:t={b_field.t} bind:l={b_field.l} bind:w={b_field.w} bind:h={b_field.h} resizable on:move>
    <!-- <div slot="settings">
        <SettingsBlock>
            <SettingsItem bind:value={b_field.B} name={"B"} min={$B_min} max={$B_max} step={$B_step}/>
        </SettingsBlock>
    </div> -->
    <div slot="content">
        <div class="text-orange-500 mx-1">B<sub>{i+1}</sub></div>
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-evenly  border-orange-500 border-2">
            {#each rows as row}
            <div class="flex flex-row justify-evenly opacity-80">
                {#each circles as circle}
                <div class="rounded-full border-2 border-orange-500 p-2 w-8 h-8 flex ">
                    {#if direction_down}
                    <div class="h-0 w-0 border-2 border-orange-500 rounded-full m-auto self-center">
                        
                    </div>
                    {:else}
                    <div class="self-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {/if}
                </div>
                {/each}
            </div>
            {/each}
        </div>
    </div>
    
</Movable>


