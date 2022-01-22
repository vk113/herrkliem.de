<script>
    import { onMount } from "svelte";
    export let s = 20;
    let width;
    let height;
    let hlines = [];
    let vlines = [];

    $: {

        for(let i = 0; i<width; i=i+s){
            hlines.push(i);
        }
        for (let i = 0; i<height; i=i+s){
            vlines.push(i);
        }
        console.log(hlines, vlines)
        vlines = vlines;
        hlines = hlines;
    }


    

</script>
<div bind:clientHeight={height} bind:clientWidth={width} class="absolute inset-0 inline">
    {#each hlines as l}
    <div class="absolute top-0 bottom-0 w-0 border border-gray-200" style="left:{l}px">
        
    </div>
    {/each}
    {#each vlines as l}
    <div class="absolute left-0 right-0 h-0 border border-gray-200" style="top:{l}px">
        
    </div>
    {/each}
</div>