<script>
    import Applet from '$lib/Applet.svelte';
    import * as ph from '$lib/physic.js';
    import {B_min, B_max, B_step, E_min, E_max, E_step} from '$lib/settings.js';
    const u = 1.66054*10**(-27)
    const q = 1.602*10**(-19)
    let simulation = new ph.Simulation(
		new ph.Source(100, 400),
		[],
		[new ph.EField(100, 100, 200, 200, {x: 0, y: 100000})],
		[new ph.BField(300, 100, 200, 200, .5)],
	);
	simulation.colors = ["blue"]
    simulation.vs = [1*10**5, 1.5*10**5, 1.8*10**5, 2*10**5, 2.2*10**5, 2.4*10**5, 2.6*10**5];
    simulation.ms = [12*u, 14*u];
    simulation.is = [100, 1.2e13];
    simulation.q = q;
    $B_min = -0.5;
    $B_max = 0.5;
    $B_step = 0.001;
    $E_min = -100000;
    $E_max = 100000;
    $E_step = 100;
</script>

<Applet {simulation}/>