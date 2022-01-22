<script>
    import Movable from '$lib/Movable.svelte';
    export let b_field;
</script>


<Movable bind:t={b_field.t} bind:l={b_field.l} bind:w={b_field.w} bind:h={b_field.h} resizable>

    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        B-Field
    </div>

</Movable>