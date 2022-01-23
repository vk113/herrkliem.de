<script>
    import Movable from "$lib/Movable.svelte";
    export let slit;
</script>
<Movable bind:l={slit.l} bind:t={slit.t} w={slit.w} bind:h={slit.h} resizable w_constant>
    <div slot="content">
        <div style="height: {(slit.h-slit.gap)/2}px" class="absolute bg-black top-0 w-full"></div>
        <div style="height: {(slit.h-slit.gap)/2}px" class="absolute bg-black bottom-0 w-full"></div>
    </div>
</Movable>