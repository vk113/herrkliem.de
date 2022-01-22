<script>
	import Source from '$lib/Source.svelte';
	import Particle from '$lib/Particle.svelte';
	import EField from '$lib/EField.svelte';
	import BField from '$lib/BField.svelte';
	import Menu from '$lib/Menu.svelte';
	import Grid from '$lib/Grid.svelte';
	import * as ph from '$lib/physic.js';
	import { onMount } from 'svelte';
	

	let width = 0;
    let height = 0;
	let running = true;


	let simulation = new ph.Simulation(new ph.Source(100, 500), [], [new ph.EField(100, 100, 200, 200, {x: 0, y: 0.05})], [new ph.BField(100, 100, 200, 200, 0.1)]);

	onMount(() => {
		let frame;

		function loop() {

			frame = requestAnimationFrame(loop);
			if(running){

				if (frame % 5 == 0){
					
					simulation.particles.push(simulation.random_particle())
				}
				
				simulation.update(width,height);
				
				
			}
			simulation.particles = simulation.particles;
		}


		loop();
		return () => cancelAnimationFrame(frame);
	});

	function add_e_field(){
		simulation.e_fields.push(new ph.EField(100, 100, 200, 200, {x: 0, y: 0.05}))
	}

	function add_b_field(){
		simulation.b_fields.push(new ph.BField(100, 100, 200, 200, 0.1))
	}
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width}></svelte:window>
<div>
	<Grid/>
	<Menu bind:running on:restart={()=>{simulation.particles = []}} on:add_b_field={add_b_field} on:add_e_field={add_e_field} />
	<div class="absolute bg-gray-300 shadow-sm">
		<Source bind:l={simulation.source.l} bind:t={simulation.source.t} w={simulation.source.w} h={simulation.source.h}/>
	</div>
	{#each simulation.particles as particle}

	<Particle {particle} />

	{/each}
	{#each simulation.e_fields as e_field}

	<EField bind:e_field={e_field}/>

	{/each}
	{#each simulation.b_fields as b_field}

	<BField bind:b_field={b_field}/>

	{/each}
	<div class="absolute left-0 bottom-0 bg-gray-900 z-10 text-gray-200">
		Particles: {simulation.particles.length}
	</div>
</div>