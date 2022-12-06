<script>
    import {getContext} from 'svelte';
    export let title = "";
    let color = getContext("color"); 
</script>
<div class="rounded-md shadow-md p-2 m-1 border-2 float-right text-sm bg-green-200 border-green-800">
    <h5 class="font-bold text-base">{title}</h5> 
    <slot/>
</div>