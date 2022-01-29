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
	import Beam from '$lib/Beam.svelte';
	import Detector from '$lib/Detector.svelte';
	import * as ph from '$lib/physic.js';
	import { onMount } from 'svelte';
	import { show_beams } from "./settings";

	export let simulation = new ph.Simulation(
		new ph.Source(100, 500),
		[],
		[new ph.EField(100, 100, 200, 200, {x: 0, y: 350000})],
		[new ph.BField(100, 100, 200, 200, .5)],
	);


	let width = 0;
    let height = 0;
	let running = true;



	onMount(() => {
		document.ontouchmove = function(e) {e.preventDefault()};
		simulation.vs.forEach((v,i) => {
			simulation.ms.forEach((m, i) => {
				simulation.beams.push(new ph.Beam(simulation.random_particle([v], [m]), simulation.colors[i], simulation.is?simulation.is[i]:1))
			})
		}
		)
		
		
		
		
		
		
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
			simulation.beams = simulation.beams;

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
	}

	function add_slit(){
		if (simulation.slits.length < 2){
			simulation.slits.push(new ph.Slit(200, 200, 25, 500, 5))
		}
	}
	function add_detector(){
		if (simulation.detectors.length < 3){
			simulation.detectors.push(new ph.Detector(200, 200, 100, 25, 5))
		}
	}

	function restart(){
		simulation.particles = [];
		simulation.trapped = [];
		simulation.stats = []
	}

	function move_source(){
		simulation.beams.forEach(b => {
			b.startp.x = simulation.source.l + simulation.source.w,
			b.startp.y = simulation.source.t + simulation.source.h/2;
            })
		update_beams();
	}

	function update_beams(){
		if($show_beams){simulation.generate_beams(0.01, width, height)}
		else{
			simulation.detectors.forEach((d) => {d.count = 0})
		}
	}

</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width}></svelte:window>
<div class="select-none overflow-hidden fixed w-full h-full">
	<Grid/>
	<Menu  
		bind:running
		on:restart={restart}
		on:add_b_field={add_b_field} 
		on:add_e_field={add_e_field} 
		on:add_slit={add_slit} 
		on:add_screen={add_screen} 
		on:add_detector={add_detector} 
		on:change={update_beams}
		bind:speed={simulation.speed} bind:density={simulation.density}/>
	<Settings bind:simulation on:input={update_beams} />
	<div class="absolute bg-gray-300 shadow-sm">
		<Source bind:l={simulation.source.l} bind:t={simulation.source.t} w={simulation.source.w} h={simulation.source.h} on:move={move_source}/>
	</div>
	{#each simulation.particles as particle}

	<Particle {particle} />

	{/each}
	{#each simulation.trapped as particle}

	<Particle {particle} />

	{/each}
	{#each simulation.e_fields as e_field, i}

	<EField bind:e_field={e_field} {i} on:move={update_beams}/>

	{/each}
	{#each simulation.b_fields as b_field, i}
	
	<BField bind:b_field={b_field} {i}  on:move={update_beams}/>

	{/each}
	{#each simulation.slits as slit}
	<Slit bind:slit={slit} on:move={update_beams}/>
	{/each}

	{#each simulation.screens as screen}
	<Screen bind:screen={screen} stats={simulation.stats} on:move={()=>{restart(); update_beams()}} />
	{/each}

	{#each simulation.detectors as detector, i}
	<Detector bind:detector={detector} stats={simulation.stats} i={i} on:move={update_beams}/>
	{/each}

	{#if $show_beams}
		{#each simulation.beams as beam}
		<Beam {beam}/>
		{/each}
	{/if}
	<!-- <div class="absolute left-0 bottom-0 z-90 bg-black text-white">
		Beams: {simulation.beams.length}
	</div> -->
</div>