<script>
    export let name;
    export let value;
    export let min; 
    export let max; 
    export let step;
    export let unit = "T";
</script>

<div class="flex flex-row space-x-2 z-10">
    <label for={name}>{name}</label>
    <input type="number" class="w-16 text-right" bind:value={value} {min} {max} {step}/>
    <span>{unit}</span>
    <input class="w-24" id={name} type="range" bind:value {min} {max} step={step}/>
</div>