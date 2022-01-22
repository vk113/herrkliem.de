<script>
    import Movable from '$lib/Movable.svelte';
    export let l, t, w, h;
</script>

<Movable bind:l bind:t h={h} w={w}>
    <div slot="content" class="" >
        Quelle
    </div>
</Movable>