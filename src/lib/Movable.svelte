<script>
    export let resizable = false;
    export let l;
    export let t;
    export let w;
    export let h;
	export let w_constant = false;
	export let in_front = true;
	export let expended;
	import {createEventDispatcher} from 'svelte';
	import { show_beams } from "./settings";


	let resize = false;

    let moving = false;
	
	let offsetX = 0;
	let offsetY = 0;
	const dispatch = createEventDispatcher()

	function onMouseDown(e) {
		moving = true;
		offsetX = e.offsetX;
		offsetY = e.offsetY;
		
	}
	
	function onMouseMove(e) {
		if (resize) {
			if(!w_constant){
				w = Math.max(e.clientX-l, 50);
			}
			h = Math.max(e.clientY-t, 50);
		} else if (moving) {
			l = e.clientX - offsetX;
			t = e.clientY - offsetY;
		}
		
	}

	function onTouchMove(e){
		if (resize) {
			if(!w_constant){
				w = Math.max((e.touches[0].clientX - l), 10);
			}
			h = Math.max((e.touches[0].clientY - t), 10);
		}
		else if(moving){
			l = e.touches[0].clientX - w/2;
			t = e.touches[0].clientY - h/2;
		}
	}
	
	function onMouseUp() {
		dispatch('move');
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
	<div on:mousedown={onMouseDown} on:touchstart={onMouseDown} on:touchmove|preventDefault={onTouchMove} >
			<slot name="content"></slot>
		{#if resizable}
			{#if w_constant}
				<div class="absolute bottom-[1px] left-[1px] w-4 h-4 bg-white " on:mousedown={onMouseResize} on:touchstart={onMouseResize}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
					</svg>
				</div>
			{:else}
				<div class="absolute bottom-0 right-0 w-5 h-5 bg-white z-2" on:mousedown={onMouseResize} on:touchstart={onMouseResize}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
					</svg>
				</div>
			{/if}
		
		{/if}
	</div>
</div>
<svelte:window on:mouseup={onMouseUp} on:touchend={onMouseUp} on:mousemove={onMouseMove} />