<script>
    import Movable from "$lib/Movable.svelte";
    export let detector;
    export let i;
</script>

<Movable bind:l={detector.l} bind:t={detector.t} w={detector.w} bind:h={detector.h} resizable w_constant on:move>
    <div slot="content">
        <div class="bg-gray-500 w-full h-full absolute text-right px-1">
            Detektor {i+1}: {detector.count}
        </div>
    </div>
</Movable>


