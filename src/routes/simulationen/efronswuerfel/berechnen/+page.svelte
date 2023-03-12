<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Katex from "$lib/Katex.svelte";
    import Task from '$lib/Task.svelte';
    import Solution from '$lib/Solution.svelte';
    import Help from '$lib/Help.svelte';
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
    setContext("color", "teal")
</script>
<Headline back="/simulationen/efronswuerfel#anchor1" src="/efron.png" title="Efronswürfel | Berechnung"/>
<TaskList>
    <Task i="3B" title="Herleitung der Gewinnchancen mit Würfel A">
        <ol>
            <li>
                Begründet, warum es zwischen den Würfeln kein Unentschieden geben kann.
            </li>
            <li>
                Zeichnet zu den Ereignissen
                <ul class="list-disc ml-10">
                    <li>
                        <Katex eq="P("/><q class="italic">Würfel A gewinnt gegen Würfel B</q><Katex eq=")"/>
                    </li>
                    <li>
                        <Katex eq="P("/><q class="italic">Würfel A gewinnt gegen Würfel C</q><Katex eq=")"/>
                    </li>
                    <li>
                        <Katex eq="P("/><q class="italic">Würfel A gewinnt gegen Würfel D</q><Katex eq=")"/>
                    </li>
                    <li>
                        <Katex eq="P("/><q class="italic">Würfel B gewinnt gegen Würfel C</q><Katex eq=")"/>
                    </li>
                    <li>
                        <Katex eq="P("/><q class="italic">Würfel B gewinnt gegen Würfel D</q><Katex eq=")"/>
                    </li>
                    <li>
                        <Katex eq="P("/><q class="italic">Würfel C gewinnt gegen Würfel D</q><Katex eq=")"/>
                    </li>
                </ul>
                je ein passendes Baumdiagramm und berechnet die Wahrscheinlichkeiten.
            </li>
        </ol>
    </Task>
    <Task i="4B" title="Strategie entwickeln">
        <ol>
            <li>
                Beschreibt präzise die bestmögliche Strategie für Bob.
            </li>
            <li>
                Wie hoch ist seine Gewinnchance im gesamten Spiel, wenn Alice immer beginnt.
            </li>
        </ol>
    </Task>
    <Task bonus i="5B" title="Efrons Tetraederwürfel <span class='text-sm rounded-full p-1 text-red-800 bg-red-200'>schwierig</span>">
        <img src="/Tetraeder.jpg" alt="" class="float-right h-32 w-auto mr-4">
        Man kann auch drei <a href="https://de.wikipedia.org/wiki/Tetraeder">Tetraeder</a>würfel so beschriften, dass sie sich so verhalten wie Efrons Würfel. <br/>
        Zeichne drei Tetraedernetze und beschrifte sie passend.
    </Task>
    
</TaskList>