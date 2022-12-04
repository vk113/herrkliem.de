<script>
    import Applet from '$lib/Applet.svelte';
    import * as ph from '$lib/physic.js';
    import {B_min, B_max, B_step, E_min, E_max, E_step} from '$lib/settings.js';
    const u = 1.66054e-27
    const q = 1.602e-19
    let simulation = new ph.Simulation(
		new ph.Source(100, 400),
		[],
		[new ph.EField(100, 100, 200, 200, {x: 0, y: 1000})],
		[new ph.BField(300, 100, 200, 200, .1)],
	);
	simulation.colors = ["blue"]
    simulation.vs = [1.5*10**5, 1.75*10**5, 2*10**5, 2.25*10**5];
    simulation.ms = [1.008*u, 2.01*u, 3.016*u];
    simulation.is = [1, 1, 1];
    simulation.q = q;
    $B_min = -0.2;
    $B_max = 0.2;
    $B_step = 0.001;
    $E_min = -10000;
    $E_max = 10000;
    $E_step = 10;
</script>

<Applet {simulation} name={"Wasserstoffisotope"}/>