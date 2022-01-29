<script>
    import Movable from "$lib/Movable.svelte";
    export let detector;
    export let i;
</script>

<Movable bind:l={detector.l} bind:t={detector.t} w={detector.w} bind:h={detector.h} on:move>
    <div slot="content">
        <div class="w-full h-full absolute px-1 border-gray-500 border bg-yellow-200 z-20 flex items-center flex-row-reverse">
            <div class="self-center">D<sub>{i+1}</sub>: <span class="text-xs">{detector.pcount()}</span></div>
        
        </div>
    </div>
</Movable>


