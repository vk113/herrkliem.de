<script>
	import Source from '$lib/Source.svelte';
	import Particle from '$lib/Particle.svelte';
	import EField from '$lib/EField.svelte';
	import BField from '$lib/BField.svelte';
	import Menu from '$lib/Menu.svelte';
	import Grid from '$lib/Grid.svelte';
	import * as ph from '$lib/physic.js';
	import { onMount } from 'svelte';
	
	import * as knobby from 'svelte-knobby';

	let width = 0;
    let height = 0;

	const controls = knobby.panel({
		// labelled control panels are collapsible
		$label: 'Main options',

		// primitive values are handled automatically
		message: 'Hello World!',
		color: '#ff3e00',
		clicks: 0,
		checked: false,

		increment: value => ({
			...value,
			clicks: value.clicks + 1
		}),

		Source_x: {
			$label: 'Source_x',
			value: 50,
			min: 0,
			max: 1000,
			step: 1
		},
		Source_y: {
			$label: 'Source_y',
			value: 50,
			min: 0,
			max: 1000,
			step: 1
		},

		B: {
			$label: 'B',
			value: 0.1,
			min: 0, 
			max: 0.5,
			step: 0.01
		},


		// objects that can't be 'interpreted' (see below)
		// are treated as folders
		folder: {
			$label: 'labelled folder',
			a: 1, // accessed as $controls.folder.a
			b: 2,
			nested: {
				c: 3, // accessed as $controls.folder.nested.c
				d: 4
			}
		}
	});




	let simulation = new ph.Simulation(new ph.Source($controls.Source_x, $controls.Source_x), [], [new ph.EField(100, 100, 200, 200, {x: 0, y: 0.05})], [new ph.BField(100, 100, 200, 200, $controls.B)]);

	$: simulation.b_fields[0].B = $controls.B;

	onMount(() => {
		let frame;

		function loop() {

			frame = requestAnimationFrame(loop);
			if (frame % 5 == 0){

				simulation.particles.push(simulation.random_particle($controls.Source_x, $controls.Source_y))
			}

				simulation.update(width,height);

				
				simulation.particles = simulation.particles;
			}


		loop();
		return () => cancelAnimationFrame(frame);
	});
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width}></svelte:window>
<div>
	<Grid/>
	<Menu/>
	<div class="absolute bg-gray-300 shadow-sm">
		<Source bind:l={$controls.Source_x} bind:t={$controls.Source_y} />
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