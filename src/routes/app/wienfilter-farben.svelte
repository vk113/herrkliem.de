<script>
    import Applet from '$lib/Applet.svelte';
    import * as ph from '$lib/physic.js';
    let simulation = new ph.Simulation(
		new ph.Source(100, 500),
		[],
		[new ph.EField(100, 100, 200, 200, {x: 0, y: 350000})],
		[new ph.BField(100, 100, 200, 200, .5)],
	);
</script>

<Applet {simulation}/>