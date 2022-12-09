<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Katex from "$lib/Katex.svelte";
    import Task from '$lib/Task.svelte';
    import Solution from '$lib/Solution.svelte';
    import Help from '$lib/Help.svelte';
    import Info from '$lib/Info.svelte';
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
    setContext("color", "red")
</script>
<Headline back="/simulationen/kniffel#anchor1" src="/kniffel.png" title="Kniffel | Berechnung"/>
<TaskList>
    <Task i="3B" title="Der erste Wurf">
        Wir werden das Problem etwas vereinfachen: <br/>
        Gewürfelt wird mit drei Würfeln bei drei Würfen. 
        Berechnet die Wahrscheinlichkeit, dass im ersten Würfelwurf keine gleichen, zweiche gleiche oder drei gleiche Augenzahlen herauskommen. 
        <Help title="Der Würfelwurf als Laplaceexperiment"> 
            Du kannst dir den Würfelwurf mit drei Würfeln als Laplaceexperiment mit <Katex eq="6\cdot6\cdot6=6^3 = 216"/> Möglichkeiten vorstellen.
        </Help>
        <Help title="Wie lassen sich die einzelnen Wahrscheinlichkeiten bestimmen?">
            Berechnet zunächst die Wahrscheinlichkeit für drei gleiche Augenzahlen, dann für drei komplett verschiedene Augenzahlen. Nun lässt sich die Wahrscheinlichkeit für genau zwei gleiche Augenzahlen einfach bestimmen.
            <Help title="Wie lässt sich die Wahrscheinlichkeit für komplett verschiedene Augenzahlen bestimmen?">
                Betrachtet es als zweistufiges Zufallsexperiment mit den Stufen: "Der 2.Würfel hat eine andere Augenzahl, als der 1. Würfel" und "Der 3. Würfel hat eine andere Augenzahl, als der 1.Würfel <span class="underline">und</span> der 2.Würfel."
            </Help>
        </Help>
    </Task>
    <Task i="4B" title="Wahrscheinlichkeit für einen Kniffel">
        <Info><b>Hinweis:</b> Eine Möglichkeit für die beste Strategie bei drei unterschiedlichen Augenzahlen nach dem ersten Wurf ist es, nochmal mit allen Dreien zu würfeln. Dies lässt sich am einfachsten berechnen.</Info>
        <ol>
            <li>
                Stellt das Spielen mit der bestmöglichen Strategie als dreistufiges Zufallsexperiment dar. Nutzt dafür folgende Abkürzungen: 
                <ul class="list-disc ml-10">
                    <li>
                        <Katex eq="K" />: <q class="italic">Keine gleichen Augenzahlen</q>
                    </li>
                    <li>
                        <Katex eq="Z" />: <q class="italic">Zwei gleiche Augenzahlen</q>
                    </li>
                    <li>
                        <Katex eq="D" />: <q class="italic">Drei gleiche Augenzahlen</q>
                    </li>
                </ul>
            </li>
            <li>
                Berechnet die Wahrscheinlichkeit, spätestens nach drei Würfeldurchgängen einen Kniffel zu erhalten.
            </li>
        </ol>
    </Task>
    <Task bonus i="5B" title="Erweiterung auf 5 Würfel">
        Lässt sich euer Vorgehen auf das Würfeln mit fünf Würfeln übertragen? Skizziert die Herangehensweise und notiert euch mögliche Unterschiede und Herausforderungen. 
    </Task>

    
</TaskList>