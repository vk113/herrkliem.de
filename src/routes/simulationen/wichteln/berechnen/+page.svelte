<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Katex from "$lib/Katex.svelte";
    import Task from '$lib/Task.svelte';
    import Solution from '$lib/Solution.svelte';
    import Help from '$lib/Help.svelte';
    import {setContext} from 'svelte';
    setContext("color", "blue")
</script>
<Headline back="/simulationen/wichteln#anchor1" src="/vertauschte_briefe.png" title="Wichteln | Berechnen"/>
<TaskList>
    <Task i="3B" title="Anzahl der Kombinationen">
        <ol class="">
            <li>
                Bestimme die Anzahl der möglichen Kombinationen, die sich beim Ziehen der Wichtelzettel bei fünf Wichteln ergeben.
                <Help title="Tipp: Urnenmodell">
                    Überlege dir welches Urnenmodell dem Wichteln entspricht: 
                    <ul class="list-disc ml-10">
                        <li>Wie viele Kugeln sind in der Urne?</li>
                        <li>Sind alle Kugeln verschieden?</li>
                        <li>Wie oft wird gezogen?</li>
                        <li>Mit oder ohne Zurücklegen?</li>
                    </ul>
                </Help>
            </li>
            <li>
                Stelle eine allgemeine Formel auf, mit der sich berechnen lässt, wie viele Kombinationen es bei <Katex eq="n"/> Wichteln gibt. 
            </li>
        </ol>
    </Task>
    <Task bonus i="4B" title="Permutationen bestimmen <span class='text-sm rounded-full p-1 text-red-800 bg-red-200'>schwierig</span>">
        Vertauschungen einer Menge nennen Mathematiker*innen Permutationen. Ihr wisst bereits, wie viele Permutationen es für die fünf Wichtelzettel gibt. 
        Schwierig ist es, diese systematisch aufzuschreiben. Dazu gibt es verschiedene Algorithmen. 
        
        <ol>
            <li>Informiert euch über den <a class="a" href="https://de.wikipedia.org/wiki/Heap-Algorithmus">Heap-Algorithmus</a>.</li>
            <li>Generiert mithilfe des Algorithmus' alle möglichen Permutationen von fünf Wichtelzetteln. Dazu kann auch eine Programmiersprache verwendet werden.</li>
        </ol>

    </Task>
    <Task i="5B" title="Wahrscheinlichkeit bestimmen">
        Ladet euch die Exceldatei mit allen möglichen Kombinationen herunter und wertet sie aus. Ihr könnt davon ausgehen, dass alle Kombinationen gleich wahrscheinlich sind. Geht dabei folgendermaßen vor: 
        <ol>
            <li>Wertet aus bei <span class="underline">wievielen Kombinationen</span> <span class="underline">wieviele Wichtel</span> ihren eigenen Zettel ziehen.</li>
            <li>Stellt die ermittelten Daten in einem geeigneten Diagramm dar.</li>
            <li>Ermittelt die Wahrscheinlichkeit, dass kein Wichtel seinen eigenen Zettel zieht.</li>
        </ol>
    </Task>
</TaskList>