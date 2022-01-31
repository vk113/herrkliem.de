<script>
    import Movable from '$lib/Movable.svelte';
    export let l, t, w, h, name;
</script>

<Movable bind:l bind:t h={h} w={w} on:move>
    <div slot="content">
        <div class="absolute w-full bg-gray-300 flex border border-gray-800 -translate-y-1/2">
            <div class="self-center">
                Ionenquelle
            </div>
        </div>
        <div class="text-sm text-gray-700 absolute top-4 -left-5 w-32">
            {@html name}
        </div>
    </div>
</Movable>