<script>
    export let resizable = false;
    export let l=20;
    export let t=20;
    export let w = 100;
    export let h = 100;
	export let in_front;

	let resize = false;

    let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (resize) {
			w += e.movementX;
			h += e.movementY;
		} else if (moving) {
			l += e.movementX;
			t += e.movementY;
		}
		
	}
	
	function onMouseUp() {
		moving = false;
		resize = false;
	}

	function onMouseResize(){
		resize = true;
	}

	
</script>

<style lang="postcss">
    .draggable {
		cursor: move;
		border: solid 1px gray;
		position: absolute;
	}

</style>
<div class="draggable bg-green-500 opacity-50" style="top:{t}px; left:{l}px; width:{w}px; height:{h}px" bind:offsetWidth={w} bind:offsetHeight={h}>
	{#if in_front}
	<slot name="settings"></slot>
	{/if}
	<div on:mousedown={onMouseDown} on:touchstart={onMouseDown} >
			<slot name="content"></slot>
		{#if resizable}
		<div class="absolute bottom-0 right-0 w-5 h-5 bg-white z-2" on:mousedown={onMouseResize}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
			</svg>
		</div>
		{/if}
	</div>
</div>
<svelte:window on:mouseup={onMouseUp} on:touchend={onMouseUp} on:touchmove={onMouseMove} on:mousemove={onMouseMove} />