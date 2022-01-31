<script>
    import Applet from '$lib/Applet.svelte';
    import * as ph from '$lib/physic.js';
    import {B_min, B_max, B_step, E_min, E_max, E_step, show_beams} from '$lib/settings.js';
    const u = 1.66054*10**(-27)
    const q = 1.602*10**(-19)
    let simulation = new ph.Simulation(
		new ph.Source(100, 400),
		[],
		[new ph.EField(100, 100, 300, 200, {x: 0, y: 100000})],
		[new ph.BField(300, 100, 300, 200, .5)],
	);
	simulation.colors = ["blue"]
    simulation.vs = [1*10**5, 1.5*10**5, 2*10**5, 2.5*10**5];
    simulation.ms = [12*u, 14*u];
    simulation.is = [1.2e14, 62];
    simulation.q = q;
    $B_min = -1;
    $B_max = 1;
    $B_step = 0.001;
    $E_min = -100000;
    $E_max = 100000;
    $E_step = 100;
    $show_beams = false;
</script>

<Applet {simulation}/>