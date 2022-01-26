<script>

export let beam;
let path = "";
$: {
    path = "";
    beam.nodes.forEach((b, i) => {
        if(i == 0){
            path += `M${Math.round(b.x)} ${Math.round(b.y)} `
        } else {
            path += `L${Math.round(b.x)} ${Math.round(b.y)} `
        }
    })}
</script>

<svg width="100%" height="100%" class="absolute top-0 left-0 z-10 stroke-green-500 stroke-2 fill-transparent pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <path d={path}/>
    <!-- Punkte -->
</svg>