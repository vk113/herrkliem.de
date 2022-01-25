<script>
	import Source from '$lib/Source.svelte';
	import Particle from '$lib/Particle.svelte';
	import EField from '$lib/EField.svelte';
	import BField from '$lib/BField.svelte';
	import Menu from '$lib/Menu.svelte';
	import Grid from '$lib/Grid.svelte';
	import Slit from '$lib/Slit.svelte';
	import Screen from '$lib/Screen.svelte';
	import Settings from '$lib/Settings.svelte';
	import * as ph from '$lib/physic.js';
	import { onMount } from 'svelte';
	

	let width = 0;
    let height = 0;
	let running = true;


	let simulation = new ph.Simulation(
		new ph.Source(100, 500),
		[],
		[new ph.EField(100, 100, 200, 200, {x: 0, y: 1})],
		[new ph.BField(100, 100, 200, 200, .5)],
	);

	onMount(() => {
		let frame;
		let time = Date.now();
		let dt = 0;
		function loop() {
			frame = requestAnimationFrame(loop);
			if(running){
				dt = (Date.now() - time)
				time = Date.now()
				if (frame % Math.round(50/simulation.density) == 0){
					
					simulation.particles.push(simulation.random_particle())
				}
				
				simulation.update(dt, width,height);
				
				
			}
			else {
				time = Date.now()
			}
			simulation.particles = simulation.particles;
			simulation.stats = simulation.stats;

		}


		loop();
		return () => cancelAnimationFrame(frame);
	});

	function add_e_field(){
		simulation.e_fields.push(new ph.EField(100, 100, 200, 200, {x: 0, y: 1}))
	}

	function add_b_field(){
		simulation.b_fields.push(new ph.BField(100, 100, 200, 200, 0.1))
	}
	
	function add_screen(){
		if (simulation.screens.length == 0){
			simulation.screens.push(new ph.Screen(200, 200, 30, 500))
		}
		else{
			console.log(simulation.screens)
		}
	}

	function add_slit(){
		if (simulation.slits.length == 2){
			simulation.slits.push(new ph.Slit(200, 200, 25, 500, 5))
		}
	}
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width}></svelte:window>
<div class="select-none">
	<Grid/>
	<Menu  bind:running on:restart={()=>{simulation.particles = [], simulation.trapped = [], simulation.stats = []}} on:add_b_field={add_b_field} on:add_e_field={add_e_field} on:add_slit={add_slit} on:add_screen={add_screen} bind:speed={simulation.speed} bind:density={simulation.density}/>
	<Settings bind:simulation/>
	<div class="absolute bg-gray-300 shadow-sm">
		<Source bind:l={simulation.source.l} bind:t={simulation.source.t} w={simulation.source.w} h={simulation.source.h}/>
	</div>
	{#each simulation.particles as particle}

	<Particle {particle} />

	{/each}
	{#each simulation.trapped as particle}

	<Particle {particle} />

	{/each}
	{#each simulation.e_fields as e_field, i}

	<EField bind:e_field={e_field} {i}/>

	{/each}
	{#each simulation.b_fields as b_field, i}

	<BField bind:b_field={b_field} {i}/>

	{/each}
	{#each simulation.slits as slit}
	<Slit bind:slit={slit}/>
	{/each}

	{#each simulation.screens as screen}
	<Screen bind:screen={screen} stats={simulation.stats}/>
	{/each}

	<div class="absolute left-0 bottom-0 bg-gray-900 z-10 text-gray-200">
		Particles: {simulation.particles.length}
	</div>
</div>