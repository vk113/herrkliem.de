<script>
    import Movable from '$lib/Movable.svelte';
    export let l, t;
</script>

<Movable bind:l bind:t h={30}>
    <slot>
        Source
    </slot>
</Movable>