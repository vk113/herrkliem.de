<script>
    export let resizable = false;
    export let l;
    export let t;
    export let w;
    export let h;
	export let w_constant = false;
	export let in_front = true;
	export let expended;

	let resize = false;

    let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (resize) {
			if(!w_constant){
				w = Math.max(w+e.movementX, 10);
			}
			h = Math.max(h+e.movementY, 10);
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
		position: absolute;
	}

</style>
<div class="draggable {in_front?"z-5":"pointer-events-none"}" style="top:{t}px; left:{l}px; width:{w}px; height:{h}px" bind:offsetWidth={w} bind:offsetHeight={h}>
	{#if in_front}
	<slot name="settings"></slot>
	{/if}
	<div on:mousedown={onMouseDown} on:touchstart={onMouseDown}>
			<slot name="content"></slot>
		{#if resizable}
			{#if w_constant}
				<div class="absolute bottom-[1px] left-[1px] w-4 h-4 bg-white " on:mousedown={onMouseResize}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
					</svg>
				</div>
			{:else}
				<div class="absolute bottom-0 right-0 w-5 h-5 bg-white z-2" on:mousedown={onMouseResize}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
					</svg>
				</div>
			{/if}
		
		{/if}
	</div>
</div>
<svelte:window on:mouseup={onMouseUp} on:touchend={onMouseUp} on:touchmove={onMouseMove} on:mousemove={onMouseMove} />