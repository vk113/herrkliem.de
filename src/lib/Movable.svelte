<script>
    export let resizable = false;
    export let l=20;
    export let t=20;
    export let w = 100;
    export let h = 100;


    let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			l += e.movementX;
			t += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}

	
</script>

<style lang="postcss">
    .draggable {
		user-select: none;
		cursor: move;
		border: solid 1px gray;
		position: absolute;
	}

    .moving {
        @apply bg-red-500;
    }
</style>


<div on:mousedown={onMouseDown} class:moving class:resize={resizable} class="draggable bg-green-500 overflow-hidden opacity-40" style="top:{t}px; left:{l}px; width:{w}px; height:{h}px" bind:offsetWidth={w} bind:offsetHeight={h}>
    <slot>

    </slot>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />