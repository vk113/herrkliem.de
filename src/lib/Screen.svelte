<script>
    import Movable from "$lib/Movable.svelte";
    export let screen;
    export let step = 4;
    export let binstep = 6;
    export let stats = [];
    
    $: ticks = [...Array(Math.round(screen.h/step)).keys()].map(i => i*step);
    $: bins = [...Array(Math.round(screen.h/binstep)).keys()].map(i => i*binstep);
    

</script>
<Movable bind:l={screen.l} bind:t={screen.t} w={screen.w} bind:h={screen.h} resizable w_constant>
    <div slot="content">
        <div style="height:{screen.h}px" class="absolute bg-white top-0 w-full border border-black">
            {#each ticks as tick, i}
                {#if i%10==0}
                    <div style="bottom: {tick}px" class="absolute h-0 w-4 border border-black border-1">
                    </div>
                    <div style="bottom: {tick - 10}px" class="absolute -left-4">
                        {Number(i/10)}
                    </div>
                {:else if i%5==0}
                    <div style="bottom: {tick}px" class="absolute h-0 w-3 border border-black border-1">
                    </div>
                {:else}
                    <div style="bottom: {tick}px" class="absolute h-0 w-2 border border-black border-1">
                    </div>
                {/if}


            {/each}
        </div>
    </div>
</Movable>
<div style="right:{screen.h}px" class="absolute bottom-0 h-12 bg-blue-500">
    <div style="width:{screen.h}px" class="absolute bg-white">
        {#each ticks as tick, i}
            {#if i%10==0}
                <div style="right: {screen.h - tick}px" class="absolute h-4 w-0 border border-black border-1">
                </div>
                <div style="right: {screen.h - tick -4}px" class="absolute -bottom-10">
                    {Number(i/10)}
                </div>
            {:else if i%5==0}
                <div style="right: {screen.h - tick}px" class="absolute h-3 w-0 border border-black border-1">
                </div>
            {:else}
                <div style="right: {screen.h - tick}px" class="absolute h-2 w-0 border border-black border-1">
                </div>
            {/if}
            <!-- stats.filter(x => {x==tick}).length * 10 -->
        {/each}
        {#each bins as bin, i}
            <div style="right:{screen.h - bin - binstep/2}px; height: {stats.filter(x => x<bin && x>bin-binstep).length}px; width:{binstep}px" class="absolute bottom-0 border bg-red-500 border-1"> 
            </div>
        {/each}
    </div>
</div>