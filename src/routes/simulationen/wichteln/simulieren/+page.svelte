<script>
    import Headline from "$lib/Headline.svelte";
    import TaskList from '$lib/TaskList.svelte';
    import Task from '$lib/Task.svelte';
    import Help from "$lib/Help.svelte";
    import Solution from "$lib/Solution.svelte";
    import {setContext} from 'svelte';
	import ExcelDownload from "$lib/ExcelDownload.svelte";
	import Katex from "$lib/Katex.svelte";
    setContext("color", "blue")
</script>

<Headline back="/simulationen/wichteln" src="/vertauschte_briefe.png" title="Wichteln | Simulieren"/>
<TaskList>
    <Task i="3A" title="Simulation eines Durchgangs mit fünf Wichteln">
        Simuliert einen Durchgang mit fünf Wichteln. Erfasst dabei mithilfe geeigneter Formeln automatisch, wie viele Wichtel sich selbst gezogen haben. 
        <Help title="Excel Vorlage">
            Du <i>kannst</i> für die Simulation die folgende Excelvorlage verwenden:
            <div class="w-full">
                <ExcelDownload filename="Vorlage Ziegenproblem" href="/vorlagen/ziegenproblem_vorlage.xlsx"/>
            </div>
        </Help>
        <Help title="Wie kann ich jedem Wichtel einen Wichtelzettel zuordnen, ohne dass ein Wichtelzettel doppelt vergeben wird?">
            Das Durchmischen einer Menge ist in Excel tatsächlich nicht so einfach. Folgende Strategie kann dir dabei helfen: <br/>
            <ul class="list-disc">
                <li>
                    Generiert zunächst mithilfe der Funktion 
                    <a class="a" href="https://support.microsoft.com/de-de/office/zufallszahl-funktion-4cbfa695-8869-4788-8d90-021ea9f5be73">ZUFALLSZAHL</a>,
                    jedem Wichtel eine Zufallszahl zu. Ihr könnt davon ausgehen, dass keine zwei Zufallszahlen gleich groß sind. 
                </li>
                <li>
                    Nutzt nun die Funktion 
                    <a class="a" href="https://support.microsoft.com/de-de/office/sortierennach-funktion-cd2d7a62-1b93-435c-b561-d6a35134f28f">SORTIERENNACH</a>
                    um jedem Wichtel einen anderen Zettel zuzuordnen. Sortiert dazu die Personen (1 bis 5) nach den generierten Zufallszahlen.
                </li>
            </ul>
            <Solution title="Lösung">
                TODO: LÖSUNG EINFÜGEN
            </Solution>
        </Help>
    </Task>
    <Task i="4A" title="Simulation von 1000 Durchgängen">
        <ol>
            <li>
                Führt die Simolation 1000 Mal durch und wertet aus, <span class="underline">wie oft</span> <span class="underline">wie vielen</span> Wichteln der eigene Zettel zugeordnet wurde.
            </li>
            <li>
                Stellt die Auswertung in einem aussagekräftigen Diagrammen dar.
            </li>
            <li>
                Stellt eine Vermutung auf: Mit welcher Wahrscheinlichkeit hat mindestens ein Wichtel sich selbst gezogen?
            </li>
        </ol>
    </Task>
    <Task i="5A" title="Simulation mit 20 Wichteln">
        Wiederholt Aufgaben 3A und 4A diesmal mit 20 Wichteln und 100 Durchgängen. Vergleicht euer Ergebnis mit der Simulation mit fünf Wichteln.
    </Task>
    
</TaskList>

<style>
    .a{
        @apply text-blue-600;
    }
</style>