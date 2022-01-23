<script>
    import Movable from '$lib/Movable.svelte';
    export let l, t, w, h;
</script>

<Movable bind:l bind:t h={h} w={w}>
    <div slot="content">
        <div class="absolute w-full bg-gray-300 flex border border-gray-800 -translate-y-1/2">
            <div class="self-center">
                Quelle
            </div>
        </div>
    </div>
</Movable>