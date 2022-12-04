<script>
    import Applet from '$lib/Applet.svelte';
    import * as ph from '$lib/physic.js';
    import {B_min, B_max, B_step, E_min, E_max, E_step} from '$lib/settings.js';
    let simulation = new ph.Simulation(
		new ph.Source(100, 500),
		[],
		[new ph.EField(100, 100, 200, 200, {x: 0, y: 1000})],
		[new ph.BField(100, 100, 200, 200, .01)],
	);
	simulation.colors = ["blue", "blue", "blue"];
    simulation.vs = [2*10**5];
    simulation.ms = [9.109e-29];
    $B_min = -0.01;
    $B_max = 0.01;
    $B_step = 0.00001;
    $E_min = -3000;
    $E_max = 3000;
    $E_step = 1;
    
</script>

<Applet {simulation}/>