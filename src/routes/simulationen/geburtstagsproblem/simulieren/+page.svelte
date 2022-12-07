<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Task from '$lib/Task.svelte';
    import Help from "$lib/Help.svelte";
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
	import Katex from "$lib/Katex.svelte";
    setContext("color", "pink")
</script>

<Headline back="/simulationen/geburtstagsproblem#anchor1" src="/geburtstagsproblem.png" title="Geburtstagsproblem | Simulation"/>
<TaskList>
    <Task i="3A" title="Simulation einer Verteilung">
        Simuliert eine Zufällige Verteilung in einer Gruppe mit 23 Schüler*innen und schreibt eine Funktion, die erkennt, ob mindestens zwei Schüler*innen am selben Tag Geburtstag haben.<br/>
        <Help title="Excel Vorlage">
            Du <i>kannst</i> für die Simulation die folgende Excelvorlage verwenden:
            <div class="w-full">
                <ExcelDownload filename="Vorlage Ziegenproblem" href="/vorlagen/ziegenproblem_vorlage.xlsx"/>
            </div>
        </Help>
        <Help title="Wie kann Excel erkennen, ob zwei Schüler*innen am selben Tag Geburtstag haben.">
            Eine Möglichkeit ist, unter jedem zufällig generiertem Tag zu zählen, wie viele Schüler*innen insgesamt an diesem Tag Geburtstag haben. Danach muss nur noch geprüft werden, ob einer dieser Zähler größer als 1 ist.
        </Help>
        
    </Task>
    <Task i="4A" title="Simulation von 100 Durchgängen">
        <ol >
            <li>
                Führt die Simolation 100 mal durch und wertet die Simulation aus, indem ihr zählt, wie oft mindestens zwei Schüler*innen am selben Tag Geburtstag haben.
            </li>
            <li>
                Stellt die Auswertung in aussagekräftigen Diagrammen dar.
            </li>
        </ol>
    </Task>

    <Task bonus i="5B" title="Simulation mit 40 Schüler*innen">
        Wiederholt Aufgabe <span class="text-pink-600 font-bold">3A</span> und <span class="text-pink-600 font-bold">4A</span> diesmal mit 40 Schüler*innen und vergleicht eure Ergebnisse mit der vorherigen Simulation.
    </Task>
    
</TaskList>
